import ConnectDB from "@/lib/config/db";
import apimodel from "@/lib/models/apimodel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await ConnectDB();
    const body = await req.json();
    const { icon, name, description, category, apiEndpint, documentation } =
      body;

    if (
      !icon ||
      !name ||
      !description ||
      !category ||
      !apiEndpint ||
      !documentation
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "icon, name, description, category, apiEndpint are required!",
        },
        { status: 400 }
      );
    }

    const api = await apimodel.create({
      icon,
      name,
      description,
      documentation,
      category,
      apiEndpint,
    });
    return NextResponse.json(
      {
        success: true,
        message: "API created successfully",
        data: api,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(" Error:", error);
    return NextResponse.json(
      { error: "Failed to create api " },
      { status: 500 }
    );
  }
}
