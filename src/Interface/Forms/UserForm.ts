import { IsNotEmpty, IsNumber } from "class-validator";

class UserForm {
  @IsNotEmpty({ message: '名前は必須です' })
  firstName!: string;
  @IsNotEmpty({ message: '苗字は必須です' })
  lastName!: string;
  @IsNumber({}, { message: '年齢は数値で入力してください' })
  age!: number;
  @IsNotEmpty({ message: 'メールアドレスは必須です' })
  email!: string;
  @IsNotEmpty({ message: '電話番号は必須です' })
  contactNumber!: string;
  photoUrl!: string;
  @IsNotEmpty({ message: 'パスワードは必須です' })
  password!: string;
}

export default UserForm;