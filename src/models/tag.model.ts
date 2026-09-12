import { Tag as TagType } from "@generated/prisma/client";

/**
 * Tag Domain Model
 * Represents a tag entity for categorizing blog posts
 */
export class Tag implements Partial<TagType> {
  id: string;
  name: string;
  slug: string;
  createdAt: Date;

  constructor(data: TagType) {
    this.id = data.id;
    this.name = data.name;
    this.slug = data.slug;
    this.createdAt = data.createdAt;
  }
}
