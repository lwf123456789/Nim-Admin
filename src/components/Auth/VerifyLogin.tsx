'use client'
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "https://cdni.iconscout.com/illustration/premium/thumb/lock-and-key-11434457-9246670.png?f=webp",
  "https://cdni.iconscout.com/illustration/premium/thumb/lock-and-key-10857619-8706723.png?f=webp",
  "https://cdni.iconscout.com/illustration/premium/thumb/lock-and-key-10857560-8706743.png?f=webp",
  "https://cdni.iconscout.com/illustration/premium/thumb/lock-and-key-10857606-8706730.png?f=webp",
];

const VerifyLogin: React.FC = () => {
  const [values, setValues] = useState<string[]>(["", "", "", ""]);
  const [isCounting, setIsCounting] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const inputsRef = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isCounting && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0) {
      setIsCounting(false);
    }
    return () => clearTimeout(timer);
  }, [isCounting, countdown]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    if (value.length <= 1) {
      const newValues = [...values];
      newValues[index] = value;
      setValues(newValues);

      if (value.length === 1 && index < inputsRef.current.length - 1) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && index > 0 && !values[index]) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleResend = () => {
    setIsCounting(true);
    setCountdown(60);
    // 在这里添加你的获取验证码的逻辑
    console.log("验证码已发送");
  };

  return (
    <div className="overflow-hidden px-4 dark:bg-boxdark-2 sm:px-8">
      <div className="flex flex-col items-center justify-center overflow-hidden">
        <div className="no-scrollbar overflow-y-auto py-20">
          <div className="mx-auto w-full max-w-[480px]">
            <div className="text-center">
              <Link href="/" className="mx-auto flex justify-center">
                <Image width={256} height={64} src="https://cdni.iconscout.com/illustration/premium/thumb/secure-log-in-4621723-3831034.png?f=webp" alt="Logo" priority />
              </Link>

              <div className="rounded-xl bg-white p-4 shadow-14 dark:bg-boxdark lg:p-7.5 xl:p-12.5">
                <h1 className="mb-2.5 text-3xl font-black leading-[48px] text-black dark:text-white">
                  验证码登录
                </h1>

                <p className="mb-7.5 font-medium">请输入四位验证码</p>

                <form>
                  <div className="flex items-center gap-4.5">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div key={index} className="relative w-full">
                        <input
                          type="text"
                          maxLength={1}
                          ref={(el) => (inputsRef.current[index] = el!)}
                          value={values[index]}
                          onChange={(e) => handleInputChange(e, index)}
                          onKeyDown={(e) => handleKeyDown(e, index)}
                          className="w-full rounded-md border-[1.5px] border-stroke bg-transparent p-3 text-center text-2xl font-medium text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                        {values[index] && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Image
                              src={images[index]}
                              alt="Hidden Character"
                              width={32}
                              height={32}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <p className="mb-5 mt-4 text-left font-medium text-black dark:text-white">
                    没有收到验证码?
                    {isCounting ? (
                      <span className="text-gray-500 ml-4">  {countdown} 秒后重新发送</span>
                    ) : (
                      <button type="button" onClick={handleResend} className="text-primary">重新发送</button>
                    )}
                  </p>

                  <button type="submit" className="flex w-full justify-center rounded-md bg-primary p-[13px] font-bold text-gray hover:bg-opacity-90">
                    登录
                  </button>

                  <span className="mt-5 block text-red">请保护好个人验证码！</span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyLogin;
