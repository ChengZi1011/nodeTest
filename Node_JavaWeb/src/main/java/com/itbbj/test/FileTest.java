package com.itbbj.test;

import org.junit.Test;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class FileTest {
    @Test
    public void testWriteFile() {
        //./或者不加 当前文件夹 表示与src同级文件夹
        File file = new File("./student.txt");
        FileWriter fileWriter = null;
        try {
            fileWriter = new FileWriter(file);
            fileWriter.write("hello");
            fileWriter.flush();
            System.out.println("写入成功");
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                fileWriter.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    @Test
    public void testWriteFileAppend() {
        //./ 当前文件夹 表示与src同级文件夹
        File file = new File("./student.txt");
        FileWriter fileWriter = null;
        try {
            fileWriter = new FileWriter(file,true);
            fileWriter.write("hello");
            fileWriter.flush();
            System.out.println("写入成功");
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                fileWriter.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    @Test
    public void readWriteFile() {
        //./ 当前文件夹 表示与src同级文件夹
        File file = new File("./student.txt");
        FileReader fileReader = null;
        try {
            fileReader = new FileReader(file);
            int a;
            while ((a=fileReader.read()) != -1){
                System.out.print((char)a);
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                fileReader.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }


}
