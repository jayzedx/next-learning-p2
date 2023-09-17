import { NextRequest, NextResponse } from 'next/server';
export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: 'Mosh',
      age: 20,
    },
    {
      id: 2,
      name: 'jay',
      age: 30,
    },
  ]);
}
