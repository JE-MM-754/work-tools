import { NextRequest, NextResponse } from "next/server";
import { getTask, getColumnsWithTasks } from "@/lib/store";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const taskId = searchParams.get("taskId");

    if (taskId) {
      const task = getTask(taskId);
      if (!task) {
        return NextResponse.json({ error: "Task not found" }, { status: 404 });
      }
      return NextResponse.json({ task });
    }

    // Return all columns with tasks
    const columns = getColumnsWithTasks();
    return NextResponse.json({ columns });
  } catch (err) {
    console.error("Error fetching task status:", err);
    return NextResponse.json({ error: "Failed to fetch status" }, { status: 500 });
  }
}