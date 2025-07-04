package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {
    public static void main(String[] args) {
        // Load Spring context
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Ask Spring to give you the bookService bean
        BookService service = (BookService) context.getBean("bookService");

        // Call the service method
        service.addBook();
    }
}
