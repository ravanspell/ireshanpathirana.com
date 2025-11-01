'use server';

import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { loginSchema, LoginFormData } from '@/lib/validations/auth';
import { ROUTES } from '@/lib/constants/routes';
import { ValidationError } from 'yup';

/**
 * Server Action: Login
 *
 * Authenticates a user with email and password using Supabase.
 * Validates input, checks credentials, and redirects on success.
 *
 * @param credentials - Object containing email and password
 * @returns Object with errors if validation/authentication fails, otherwise redirects
 */
export async function loginAction(credentials: LoginFormData) {
  // Server-side validation with Yup
  try {
    await loginSchema.validate(credentials, { abortEarly: false });
  } catch (error) {
    if (error instanceof ValidationError) {
      // Convert validation errors to field-specific errors
      const fieldErrors: Record<string, string> = {};
      error.inner.forEach((err) => {
        if (err.path) {
          fieldErrors[err.path] = err.message;
        }
      });
      return { errors: fieldErrors };
    }
    return { error: 'Validation failed' };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: credentials.email,
    password: credentials.password,
  });

  if (error) {
    return { error: error.message };
  }

  redirect(ROUTES.ADMIN.EDITOR);
}
