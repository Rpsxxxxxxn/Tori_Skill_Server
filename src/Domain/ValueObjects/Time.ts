class Time {
  private readonly value: Date;

  private constructor(value: Date) {
    this.value = value;
  }

  public getValue(): string {
    return this.value.toString();
  }

  /**
   * YYYY年MM月DD日
   */
  public getJapaneseFormattedValue(): string {
    const date = new Date(this.value);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}年${month}月${day}日`;
  }

  /**
   * YYYY-MM-DD
   */
  public getFormattedValue(): string {
    const date = new Date(this.value);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${month}-${day}`;
  }

  /**
   * YYYY-MM-DD HH:MM:SS
   */
  public getFormattedDateTimeValue(): string {
    const date = new Date(this.value);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = ('0' + date.getHours()).slice(-2);
    const minute = ('0' + date.getMinutes()).slice(-2);
    const second = ('0' + date.getSeconds()).slice(-2);

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  }

  public static create(value: Date): Time {
    return new Time(value);
  }
}

export default Time;