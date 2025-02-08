import { z } from 'zod';
import { MIN_SIZE_PASSWORD } from '../../shared/constants/password';

export const updateProfilePasswordFormSchema = z
  .object({
    newPassword: z
      .string({ message: 'Informe uma senha' })
      .min(6, `Sua senha precisa de ter pelo menos ${MIN_SIZE_PASSWORD} caracteres`),
    newConfirmPassword: z.string({ message: 'Confirme a senha' }),
  })
  .refine((data) => data.newPassword === data.newConfirmPassword, {
    message: 'A senha não é igual a que você digitou aqui',
    path: ['newConfirmPassword'],
  });

export type UpdateProfilePasswordFormInterface = z.infer<typeof updateProfilePasswordFormSchema>;
