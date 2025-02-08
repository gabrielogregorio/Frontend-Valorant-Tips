import { z } from 'zod';
import { MIN_SIZE_PASSWORD } from '../../shared/constants/password';

export const createAccountFormSchema = z
  .object({
    name: z.string({ message: 'Você precisa de fornecer o seu nome' }),
    username: z.string({ message: 'Digite o seu nome de usuário' }),
    password: z
      .string({ message: 'Informe uma senha' })
      .min(6, `Sua senha precisa de ter pelo menos ${MIN_SIZE_PASSWORD} caracteres`),
    confirmPassword: z.string({ message: 'Confirme a senha' }),
    code: z.string({ message: 'Informe aqui o seu código de USO ÚNICO' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'A senha não é igual a que você digitou aqui',
    path: ['confirmPassword'],
  });

export type CreateAccountFormInterface = z.infer<typeof createAccountFormSchema>;
