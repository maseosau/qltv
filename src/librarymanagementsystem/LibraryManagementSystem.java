/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package librarymanagementsystem;


import UI.LoginForm;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */

/**
 *
 * @author 84338
 */
public class LibraryManagementSystem {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        System.out.println("Displaying the login form");
//        MainFrame myFrame = new MainFrame();
//        myFrame.init();
        LoginForm welcome = new LoginForm();
        welcome.setVisible(true);
    }
    
}

