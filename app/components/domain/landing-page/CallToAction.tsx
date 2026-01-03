import { Button } from "../../common/Button";

export const CallToAction = () => {
  return (
    <div className="my-50 w-full text-center">
      <h1 className="text-3xl font-semibold leading-11 font-medium/36">당신이 펴내는 미식 가이드.<br/>함께 Mychelin에서 시작해 볼까요?</h1>
      <Button size="md" className="mt-12 w-52">회원 가입하고 시작하기</Button>
    </div>
  );
}