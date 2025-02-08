import { z } from 'zod';

export const loginFormSchema = z.object({
  username: z.string({ message: 'Digite o seu nome de usuário' }),
  password: z.string({ message: 'Informe uma senha' }),
});

export type LoginFormInterface = z.infer<typeof loginFormSchema>;
