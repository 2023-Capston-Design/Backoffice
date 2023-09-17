import { DocumentBuilder, SwaggerCustomOptions } from '@nestjs/swagger';

export const GetSwaggerOption = () => {
  const setting = new DocumentBuilder()
    .setTitle('Backoffice')
    .setDescription('Backoffice for cloud education environment')
    .setVersion('1.0')
    .setContact(
      'Hoplin',
      'https://github.com/J-hoplin1/DSC-Lab-Backend',
      'jhoplin7259@gmail.com',
    )
    .addBearerAuth()
    .build();
  const customOption: SwaggerCustomOptions = {
    explorer: true,
    swaggerOptions: {
      persistAuthorization: true,
    },
  };

  return {
    setting,
    customOption,
  };
};
