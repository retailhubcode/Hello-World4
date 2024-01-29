import { NextResponse as response } from "next/server";
import { Handlers } from "@retailhub/audacity"

export const GET = async (request: Request, { params }: any) => {
  return Handlers({ request, response, params, apiConfig: process.env });
};

export const POST = async (request: Request, { params }: { params: any }) => {
  return Handlers({ request, response, params, apiConfig: process.env });
};

export const PATCH = (request: Request, { params }: { params: any }) => {
  return Handlers({ request, response, params, apiConfig: process.env });
};

export const DELETE = (request: Request, { params }: { params: any }) => {
  return Handlers({ request, response, params, apiConfig: process.env });
};
