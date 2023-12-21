import { IsNotEmpty } from "class-validator";

class UserView {
    @IsNotEmpty({ message: '名前は必須です' })
    name!: string;
    @IsNotEmpty({ message: 'メールアドレスは必須です' })
    email!: string;
}

export default UserView;