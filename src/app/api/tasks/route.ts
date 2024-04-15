import { NextResponse } from "next/server";

// example API
export interface Task {
  id: number;
  name: string;
}

const tasks: Task[] = [
  { id: 1, name: "sample" },
  { id: 2, name: "test" },
  { id: 3, name: "example" },
];

//デフォルトでは静的な要素としてビルドされる
//ビルド時に決まる、取得するデータが事前に決まる。

export const GET = async () => {
  // NextResponseを使用 // オブジェクト形式で返却
  return NextResponse.json({ tasks }, { status: 200 });
};

// データが頻繁に表示される場合は....
// request事に動的に実施されるようにする
// ルートセグメントコンフィグ
export const dynamic = "force-dynamic";
