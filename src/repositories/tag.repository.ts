import { Injectable, inject } from "@lib/di/injectable";
import { Db } from "@lib/db";
import { BaseRepository } from "./base.repository";
import { Tag } from "@models/tag.model";
import { CreateTagDto, UpdateTagDto } from "@dtos/tag.dto";

/**
 * Tag Repository
 * Handles data access for Tag entities
 */
@Injectable()
export class TagRepository extends BaseRepository {
  constructor(@inject(Db) private db: Db) {
    super();
  }

  /**
   * Create a new tag
   */
  async create(data: CreateTagDto) {
    const tag = await this.db.tag.create({
      data,
    });

    return new Tag(tag);
  }

  /**
   * Find tag by ID
   */
  async findById(id: string) {
    const tag = await this.db.tag.findUnique({
      where: { id },
      include: {
        posts: {
          include: {
            post: true,
          },
        },
      },
    });

    return tag ? new Tag(tag) : null;
  }

  /**
   * Find tag by slug
   */
  async findBySlug(slug: string) {
    const tag = await this.db.tag.findUnique({
      where: { slug },
      include: {
        posts: {
          include: {
            post: true,
          },
        },
      },
    });

    return tag ? new Tag(tag) : null;
  }

  /**
   * Get all tags
   */
  async findAll() {
    const tags = await this.db.tag.findMany({
      orderBy: {
        name: "asc",
      },
    });

    return tags.map((tag) => new Tag(tag));
  }

  /**
   * Update a tag
   */
  async update(id: string, data: Partial<UpdateTagDto>) {
    const tag = await this.db.tag.update({
      where: { id },
      data,
    });

    return new Tag(tag);
  }

  /**
   * Delete a tag
   */
  async delete(id: string) {
    await this.db.tag.delete({
      where: { id },
    });
  }

  /**
   * Check if slug exists
   */
  async slugExists(slug: string, excludeId?: string) {
    const tag = await this.db.tag.findUnique({
      where: { slug },
      select: { id: true },
    });

    if (!tag) return false;
    if (excludeId && tag.id === excludeId) return false;

    return true;
  }

  /**
   * Check if name exists
   */
  async nameExists(name: string, excludeId?: string) {
    const tag = await this.db.tag.findUnique({
      where: { name },
      select: { id: true },
    });

    if (!tag) return false;
    if (excludeId && tag.id === excludeId) return false;

    return true;
  }
}
