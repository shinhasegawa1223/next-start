import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  console.log("ミドルウェア通過");
  //configオブジェクトで通過するページを決めれる
  return NextResponse.next();
};

// 下記に記載されているものだけがミドルウェアを通過する
export const config = {
  matcher: ["/", "/task"],
};
