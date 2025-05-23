import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Seu Gmail
        pass: process.env.GMAIL_PASS, // Senha de app
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.GMAIL_USER,
      subject: "Nova mensagem de contato de " + name,
      text: 
      "email: " + email + "                      " + "message: " +
      message,
    });

    return NextResponse.json({ message: "Mensagem enviada com sucesso" });
  } catch (error) {
  console.error(error); // agora está sendo usado
  const errorMessage = error instanceof Error ? error.message : "Erro ao enviar a mensagem";
  return NextResponse.json({ message: errorMessage }, { status: 500 });
}
}
