import { z } from 'zod';

export const updateProfileDataFormSchema = z.object({
  imageUrl: z.string().optional(),
  name: z.string({ message: 'Você precisa de fornecer o seu nome' }),
  username: z.string({ message: 'Digite o seu nome de usuário' }),
});

export type UpdateProfileDataFormInterface = z.infer<typeof updateProfileDataFormSchema>;
