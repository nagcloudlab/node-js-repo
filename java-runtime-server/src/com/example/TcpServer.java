package com.example;

import java.io.*;
import java.net.InetSocketAddress;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;

public class TcpServer {
    public static void main(String[] args) throws Exception {

        System.out.println(Thread.currentThread());
        /*
            - computation ( part of process )
            - io          ( external to process )
         */

//        new Thread(() -> {
//            io();
//        }, "Tom").start();
//        new Thread(() -> {
//            computation();
//        }, "Jerry").start();

        ServerSocket server = new ServerSocket(); // TCP server
        server.bind(new InetSocketAddress(3000));

        while (true) {
            Socket socket = server.accept();
            new Thread(clientHandler(socket)).start();
        }

    }

    private static Runnable clientHandler(Socket socket) {
        return () -> {
            System.out.println(Thread.currentThread()+" handling connection");
            try (
                    BufferedReader reader = new BufferedReader(
                            new InputStreamReader(socket.getInputStream()));
                    PrintWriter writer = new PrintWriter(
                            new OutputStreamWriter(socket.getOutputStream()))) {
                String line = "";
                while (!"/quit".equals(line)) {
                    line = reader.readLine();     // read incoming bytes from n/w socket , i.e block here till inp available
                    System.out.println("~ " + line);
                    writer.write(line + "\n");    // write bytes in TC buffer, thred blocks here
                    writer.flush();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        };
    }

    private static void io() {
        // read / write on file-system | db-server | n/w-call
        System.out.println(Thread.currentThread() + " started io");
        Scanner scanner = new Scanner(System.in);
        System.out.println("say your name?");
        String name = scanner.nextLine();
        System.out.println("hello " + name);
        System.out.println(Thread.currentThread() + " finished io");
        scanner.close();
    }

    private static void computation() {
        System.out.println(Thread.currentThread() + " started computation");
        while (true) {

        }
    }
}
