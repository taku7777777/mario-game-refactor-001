
/**
 * 全体の処理の管理を行うコントローラーのクラス
 */
export class Controller {
  private latest = new Date().valueOf()
  private durationList: number[] = []

  /**
   * フレーム毎の更新において、状態を保持する必要があるものは、
   * private変数として宣言する必要がある
   */
  private cnt: number;

  /**
   * constructorは利用させないようにする
   */
  private constructor() {
    this.cnt = 0;
  }

  /**
   * インスタンス化時には、このstaticな関数を呼ぶようにする
   * (テストのモックが簡易化できるようにする)
   */
  public static createInstance = () => new Controller();

  /**
   * 1フレーム単位で実行される更新処理
   */
  public update = () => {
    const current = new Date().valueOf();
    const duration = current - this.latest
    this.latest = current
    this.durationList.push(duration)

    // ここに更新処理を記載する、暫定的にカウントをconsoleに吐き出す処理を記載
    this.cnt = this.cnt + 1;
    console.log("start update alert, cnt = " + this.cnt + ", duration: " + duration + ", avarage: " + (this.durationList.reduce((a,b) => a+b, 0)/this.durationList.length));

    if(this.durationList.length > 10000){
        this.durationList.length = 0
    }
  };
}
