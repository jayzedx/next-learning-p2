import { data } from 'autoprefixer';
import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';

// Props from user/[id]/page.tsx
// interface Props {
//   params: { id: number };
// }

const mockData = [
  {
    id: 1,
    name: 'Mosh',
    age: 20,
  },
];

export function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: { id: number };
  }
) {
  if (params.id > 10)
    return NextResponse.json({ error: 'user not found' }, { status: 404 });
  else return NextResponse.json(mockData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  // return NextResponse.json({ error: 'Name is required' }, { status: 400 });

  return NextResponse.json(mockData);
}

export async function PUT(
  request: NextRequest,
  {
    params,
  }: {
    params: { id: number };
  }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  // return NextResponse.json({ error: 'Name is required' }, { status: 400 });

  if (params.id > 10)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json(mockData);
}

export async function DELETE(
  request: NextRequest,
  {
    params,
  }: {
    params: { id: number };
  }
) {
  if (params.id > 10)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json(mockData);
}
