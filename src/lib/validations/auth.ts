import * as yup from 'yup';

/**
 * Login Validation Schema
 *
 * Shared validation schema for login form used on both client and server.
 * Using a shared schema ensures consistent validation across the application.
 *
 * Validation Rules:
 * - Email: Required, valid email format, trimmed of whitespace
 * - Password: Required, minimum 6 characters
 *
 * @example
 * // Client-side with React Hook Form
 * const { register, handleSubmit } = useForm({
 *   resolver: yupResolver(loginSchema)
 * });
 *
 * @example
 * // Server-side validation
 * try {
 *   await loginSchema.validate({ email, password });
 * } catch (error) {
 *   // Handle validation errors
 * }
 */
export const loginSchema = yup.object({
  /** User's email address - must be valid email format */
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address')
    .trim(),

  /** User's password - minimum 6 characters */
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

/**
 * Login Form Data Type
 *
 * TypeScript type automatically inferred from the login schema.
 * Ensures type safety across the application.
 *
 * @typedef {Object} LoginFormData
 * @property {string} email - User's email address
 * @property {string} password - User's password
 */
export type LoginFormData = yup.InferType<typeof loginSchema>;
