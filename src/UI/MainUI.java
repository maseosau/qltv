/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/GUIForms/JFrame.java to edit this template
 */
package UI;

import DB.BookLending;
import DB.Books;
import DB.LendFacade;
import DB.Users;
import javax.swing.Box;
import UI.LoginForm;
import java.awt.Component;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.DefaultCellEditor;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.event.DocumentEvent;
import javax.swing.event.DocumentListener;
import javax.swing.table.DefaultTableModel;
import javax.swing.table.TableCellEditor;
import javax.swing.table.TableCellRenderer;

/**
 *
 * @author 84338
 */
public class MainUI extends javax.swing.JFrame {

    private HashMap user;

    public DefaultTableModel booksTableModel = new DefaultTableModel();

    /**
     * Creates new form MainUI
     */
    public MainUI() {
        initComponents();
        this.setLocationRelativeTo(null);
        search();

    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated
    // Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        registerBookButton = new javax.swing.JButton();
        manageMembersButton = new javax.swing.JButton();
        registerMemberButton1 = new javax.swing.JButton();
        jLabel3 = new javax.swing.JLabel();
        jPanel2 = new javax.swing.JPanel();
        userNameLabel = new javax.swing.JLabel();
        jScrollPane1 = new javax.swing.JScrollPane();
        booksTable = new javax.swing.JTable();
        searchByNameLabel = new javax.swing.JLabel();
        searchByNameInput = new javax.swing.JTextField();
        searchByIdLabel = new javax.swing.JLabel();
        searchByIdInput = new javax.swing.JTextField();
        jLabel1 = new javax.swing.JLabel();
        jLabel2 = new javax.swing.JLabel();
        searchButton = new javax.swing.JButton();
        jMenuBar1 = new javax.swing.JMenuBar();
        jMenu1 = new javax.swing.JMenu();
        logoutButtom = new javax.swing.JMenuItem();
        exitButtom = new javax.swing.JMenuItem();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jPanel1.setBorder(javax.swing.BorderFactory.createEtchedBorder());

        registerBookButton.setBackground(new java.awt.Color(214, 220, 221));
        registerBookButton.setText("Register Book");
        registerBookButton.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                registerBookButtonActionPerformed(evt);
            }
        });

        manageMembersButton.setBackground(new java.awt.Color(214, 220, 221));
        manageMembersButton.setText("Manage Members");
        manageMembersButton.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                manageMembersButtonActionPerformed(evt);
            }
        });

        registerMemberButton1.setBackground(new java.awt.Color(214, 220, 221));
        registerMemberButton1.setText("Register Member");
        registerMemberButton1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                registerMemberButton1ActionPerformed(evt);
            }
        });

        jLabel3.setIcon(new javax.swing.ImageIcon(getClass().getResource("/UI/IMG/books.png"))); // NOI18N

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
                jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel1Layout.createSequentialGroup()
                                .addContainerGap()
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(registerBookButton, javax.swing.GroupLayout.DEFAULT_SIZE, 158,
                                                Short.MAX_VALUE)
                                        .addComponent(manageMembersButton, javax.swing.GroupLayout.DEFAULT_SIZE, 158,
                                                Short.MAX_VALUE)
                                        .addComponent(registerMemberButton1, javax.swing.GroupLayout.DEFAULT_SIZE, 158,
                                                Short.MAX_VALUE)
                                        .addGroup(javax.swing.GroupLayout.Alignment.TRAILING,
                                                jPanel1Layout.createSequentialGroup()
                                                        .addGap(0, 0, Short.MAX_VALUE)
                                                        .addComponent(jLabel3)
                                                        .addGap(12, 12, 12)))
                                .addContainerGap()));
        jPanel1Layout.setVerticalGroup(
                jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel1Layout.createSequentialGroup()
                                .addContainerGap()
                                .addComponent(registerBookButton, javax.swing.GroupLayout.PREFERRED_SIZE, 41,
                                        javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(registerMemberButton1, javax.swing.GroupLayout.PREFERRED_SIZE, 41,
                                        javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(manageMembersButton, javax.swing.GroupLayout.PREFERRED_SIZE, 41,
                                        javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED,
                                        javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                .addComponent(jLabel3)
                                .addContainerGap()));

        jPanel2.setBorder(javax.swing.BorderFactory.createEtchedBorder());

        userNameLabel.setHorizontalAlignment(javax.swing.SwingConstants.RIGHT);

        booksTable.setModel(new javax.swing.table.DefaultTableModel(
                new Object[][] {
                        { null, null, null, null }
                },
                new String[] {
                        "Id", "Name", "Author", "Title 4"
                }) {
            Class[] types = new Class[] {
                    java.lang.String.class, java.lang.String.class, java.lang.String.class, java.lang.Object.class
            };
            boolean[] canEdit = new boolean[] {
                    false, false, false, false
            };

            public Class getColumnClass(int columnIndex) {
                return types[columnIndex];
            }

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit[columnIndex];
            }
        });
        jScrollPane1.setViewportView(booksTable);

        searchByNameLabel.setText("Search book by name");

        searchByNameInput.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                searchByNameInputActionPerformed(evt);
            }
        });

        searchByIdLabel.setText("Search book by Id");

        searchByIdInput.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                searchByIdInputActionPerformed(evt);
            }
        });

        jLabel1.setFont(new java.awt.Font("Segoe UI", 1, 18)); // NOI18N
        jLabel1.setForeground(new java.awt.Color(0, 102, 102));
        jLabel1.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        jLabel1.setText("User Registration");
        jLabel1.setAlignmentY(0.0F);

        jLabel2.setFont(new java.awt.Font("Segoe UI", 1, 18)); // NOI18N
        jLabel2.setForeground(new java.awt.Color(0, 102, 102));
        jLabel2.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        jLabel2.setText("Books");
        jLabel2.setAlignmentY(0.0F);

        searchButton.setBackground(new java.awt.Color(214, 220, 221));
        searchButton.setText("Search");
        searchButton.setActionCommand("");
        searchButton.setAutoscrolls(true);
        searchButton.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                searchButtonActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel2Layout = new javax.swing.GroupLayout(jPanel2);
        jPanel2.setLayout(jPanel2Layout);
        jPanel2Layout.setHorizontalGroup(
                jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel2Layout.createSequentialGroup()
                                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                                        .addGroup(jPanel2Layout.createSequentialGroup()
                                                .addContainerGap()
                                                .addComponent(jLabel2, javax.swing.GroupLayout.DEFAULT_SIZE,
                                                        javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                                        .addGroup(jPanel2Layout.createSequentialGroup()
                                                .addGap(413, 413, 413)
                                                .addComponent(userNameLabel, javax.swing.GroupLayout.DEFAULT_SIZE, 233,
                                                        Short.MAX_VALUE))
                                        .addGroup(javax.swing.GroupLayout.Alignment.LEADING,
                                                jPanel2Layout.createSequentialGroup()
                                                        .addContainerGap()
                                                        .addComponent(jScrollPane1,
                                                                javax.swing.GroupLayout.PREFERRED_SIZE, 0,
                                                                Short.MAX_VALUE))
                                        .addGroup(javax.swing.GroupLayout.Alignment.LEADING, jPanel2Layout
                                                .createSequentialGroup()
                                                .addContainerGap()
                                                .addGroup(jPanel2Layout
                                                        .createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                        .addComponent(searchByIdLabel,
                                                                javax.swing.GroupLayout.DEFAULT_SIZE,
                                                                javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                                        .addComponent(searchByNameLabel,
                                                                javax.swing.GroupLayout.DEFAULT_SIZE,
                                                                javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addGroup(jPanel2Layout
                                                        .createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING,
                                                                false)
                                                        .addComponent(searchByNameInput,
                                                                javax.swing.GroupLayout.DEFAULT_SIZE, 391,
                                                                Short.MAX_VALUE)
                                                        .addComponent(searchByIdInput))
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addComponent(searchButton, javax.swing.GroupLayout.PREFERRED_SIZE, 89,
                                                        javax.swing.GroupLayout.PREFERRED_SIZE)))
                                .addContainerGap())
                        .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                .addGroup(jPanel2Layout.createSequentialGroup()
                                        .addGap(0, 0, Short.MAX_VALUE)
                                        .addComponent(jLabel1)
                                        .addGap(0, 0, Short.MAX_VALUE))));
        jPanel2Layout.setVerticalGroup(
                jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(jPanel2Layout.createSequentialGroup()
                                .addComponent(userNameLabel)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(jLabel2)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addGroup(jPanel2Layout.createSequentialGroup()
                                                .addGroup(jPanel2Layout
                                                        .createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                                        .addComponent(searchByNameLabel)
                                                        .addComponent(searchByNameInput,
                                                                javax.swing.GroupLayout.PREFERRED_SIZE,
                                                                javax.swing.GroupLayout.DEFAULT_SIZE,
                                                                javax.swing.GroupLayout.PREFERRED_SIZE))
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                                .addGroup(jPanel2Layout
                                                        .createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                                        .addComponent(searchByIdLabel)
                                                        .addComponent(searchByIdInput,
                                                                javax.swing.GroupLayout.PREFERRED_SIZE,
                                                                javax.swing.GroupLayout.DEFAULT_SIZE,
                                                                javax.swing.GroupLayout.PREFERRED_SIZE)))
                                        .addComponent(searchButton, javax.swing.GroupLayout.PREFERRED_SIZE, 48,
                                                javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 336,
                                        javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                        .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                .addGroup(jPanel2Layout.createSequentialGroup()
                                        .addGap(0, 0, Short.MAX_VALUE)
                                        .addComponent(jLabel1)
                                        .addGap(0, 0, Short.MAX_VALUE))));

        jMenu1.setText("File");

        logoutButtom.setText("Logout");
        logoutButtom.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                logoutButtomActionPerformed(evt);
            }
        });
        jMenu1.add(logoutButtom);

        exitButtom.setText("Exit");
        exitButtom.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                exitButtomActionPerformed(evt);
            }
        });
        jMenu1.add(exitButtom);

        jMenuBar1.add(jMenu1);

        setJMenuBar(jMenuBar1);

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
                layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addGroup(layout.createSequentialGroup()
                                .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE,
                                        javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(jPanel2, javax.swing.GroupLayout.DEFAULT_SIZE,
                                        javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)));
        layout.setVerticalGroup(
                layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE,
                                javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addComponent(jPanel2, javax.swing.GroupLayout.DEFAULT_SIZE,
                                javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE));

        pack();
    }// </editor-fold>//GEN-END:initComponents

    /**
     * Menu Logout function
     * 
     * @param evt
     */
    private void logoutButtomActionPerformed(java.awt.event.ActionEvent evt) {// GEN-FIRST:event_logoutButtomActionPerformed
        LoginForm loginForm = new LoginForm();
        loginForm.setVisible(true);
        this.dispose();
    }// GEN-LAST:event_logoutButtomActionPerformed

    /**
     * menu exit function
     * 
     * @param evt
     */
    private void exitButtomActionPerformed(java.awt.event.ActionEvent evt) {// GEN-FIRST:event_exitButtomActionPerformed
        this.dispose();
    }// GEN-LAST:event_exitButtomActionPerformed

    private void registerBookButtonActionPerformed(java.awt.event.ActionEvent evt) {// GEN-FIRST:event_registerBookButtonActionPerformed
        BookDetails bookDetails = new BookDetails();
        bookDetails.SetMode("new");
        bookDetails.setVisible(true);
        this.dispose();
    }// GEN-LAST:event_registerBookButtonActionPerformed

    private void searchByNameInputActionPerformed(java.awt.event.ActionEvent evt) {// GEN-FIRST:event_searchByNameInputActionPerformed
        this.search();
    }// GEN-LAST:event_searchByNameInputActionPerformed

    private void searchButtonActionPerformed(java.awt.event.ActionEvent evt) {// GEN-FIRST:event_searchButtonActionPerformed
        this.search();
    }// GEN-LAST:event_searchButtonActionPerformed

    private void searchByIdInputActionPerformed(java.awt.event.ActionEvent evt) {// GEN-FIRST:event_searchByIdInputActionPerformed
        this.search();
    }// GEN-LAST:event_searchByIdInputActionPerformed

    private void manageMembersButtonActionPerformed(java.awt.event.ActionEvent evt) {// GEN-FIRST:event_manageMembersButtonActionPerformed
        ManageMembers manageMembers = new ManageMembers();
        manageMembers.setVisible(true);
        this.dispose();
    }// GEN-LAST:event_manageMembersButtonActionPerformed

    private void registerMemberButton1ActionPerformed(java.awt.event.ActionEvent evt) {// GEN-FIRST:event_registerMemberButton1ActionPerformed
        MemberDetails memberDetails = new MemberDetails();
        memberDetails.SetMode("new");
        memberDetails.setVisible(true);
        this.dispose();
    }// GEN-LAST:event_registerMemberButton1ActionPerformed

    /**
     * Set the user name
     * 
     * @param userName
     */
    public void setUser(String userName) {
        // find the user
        Users users = new Users();
        List<HashMap> result = users.get("`user_name` = '" + userName + "'");
        this.user = result.get(0);
        // display the users full name
        this.userNameLabel.setText(this.user.get("full_name").toString());

    }

    /**
     * Search the database
     */
    public void search() {
        String nameSearch = this.searchByNameInput.getText();
        String idSearch = this.searchByIdInput.getText();
        nameSearch = nameSearch.replace("'", "''");
        nameSearch = nameSearch.replace("\\", "");
        idSearch = idSearch.replace("'", "''");
        idSearch = idSearch.replace("\\", "");

        Books books = new Books();
        List<HashMap> results = books.get("`name` LIKE '%" + nameSearch + "%' AND `id` LIKE '%" + idSearch + "%'");

        this.booksTableModel = new DefaultTableModel(
                new Object[][] {
                },
                new String[] {
                        "Id", "Name", "Author", "State", "Action"
                });
        this.booksTable.setModel(booksTableModel);
        for (HashMap result : results) {
            this.booksTableModel.insertRow(0, new Object[] {
                    result.get("id"),
                    result.get("name"),
                    result.get("author"),
                    result.get("state").equals(1) ? "Available," + result.get("id") : "Borrowed," + result.get("id"),
                    result.get("id")
            });
        }
        this.booksTable.getColumn("Action").setCellRenderer(new JTableButtonRenderer());
        this.booksTable.getColumn("Action").setCellEditor(new JTableButtonEditor(new JTextField(), this));
        this.booksTable.getColumn("State").setCellRenderer(new LendButtonRenderer());
        this.booksTable.getColumn("State").setCellEditor(new LendButtonEditor(new JTextField(), this));

    }

    /**
     * @param args the command line arguments
     */
    public void main(String args[]) {
        /* Set the Nimbus look and feel */
        // <editor-fold defaultstate="collapsed" desc=" Look and feel setting code
        // (optional) ">
        /*
         * If Nimbus (introduced in Java SE 6) is not available, stay with the default
         * look and feel.
         * For details see
         * http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(MainUI.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(MainUI.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(MainUI.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(MainUI.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        // </editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new MainUI().setVisible(true);
            }
        });

    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JTable booksTable;
    private javax.swing.JMenuItem exitButtom;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JMenu jMenu1;
    private javax.swing.JMenuBar jMenuBar1;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JPanel jPanel2;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JMenuItem logoutButtom;
    private javax.swing.JButton manageMembersButton;
    private javax.swing.JButton registerBookButton;
    private javax.swing.JButton registerMemberButton1;
    private javax.swing.JButton searchButton;
    private javax.swing.JTextField searchByIdInput;
    private javax.swing.JLabel searchByIdLabel;
    private javax.swing.JTextField searchByNameInput;
    private javax.swing.JLabel searchByNameLabel;
    private javax.swing.JLabel userNameLabel;
    // End of variables declaration//GEN-END:variables

    private static class LendButtonRenderer extends JButton implements TableCellRenderer {

        public LendButtonRenderer() {
            setOpaque(true);
        }

        @Override
        public Component getTableCellRendererComponent(JTable table, Object obj, boolean selected, boolean focused,
                int row, int column) {

            String lbl = obj == null ? "" : obj.toString();
            String[] cmd = lbl.split(",");
            if ("Available".equals(cmd[0])) {
                setText("Lend");
            } else {
                setText("Return");
            }
            return this;
        }
    }

    private static class LendButtonEditor extends DefaultCellEditor {

        protected JButton btn;
        private String lbl;
        private Boolean clicked;
        private JFrame srcFrame;

        public LendButtonEditor(JTextField txt, JFrame srcFrame) {
            super(txt);
            this.srcFrame = srcFrame;
            btn = new JButton();
            btn.setOpaque(true);

            // button click action
            btn.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    fireEditingStopped();
                }
            });

        }

        @Override
        public Component getTableCellEditorComponent(JTable table, Object obj, boolean selected, int row, int col) {
            lbl = obj == null ? "" : obj.toString();
            btn.setText("Processing");
            clicked = true;
            return btn;
        }

        @Override
        public Object getCellEditorValue() {
            if (clicked) {
                BookDetails bookDetails = new BookDetails();
                String[] cmd = lbl.split(",");
                if ("Available".equals(cmd[0])) {
                    // show leand book dialog
                    LendBook lendBook = new LendBook();
                    lendBook.setBookId(Integer.parseInt(cmd[1]));
                    lendBook.setVisible(true);
                    this.srcFrame.dispose();

                } else {
                    // treurn the book
                    int input = JOptionPane.showConfirmDialog(null, "Do you want mark this book as returned?");
                    // 0=yes, 1=no, 2=cancel
                    if (input == 0) {
                        // update the database
                        LendFacade.returnBook(Integer.parseInt(cmd[1]));
                        JOptionPane.showMessageDialog(null, "Book returned.");
                        this.srcFrame.dispose();
                        MainUI mainUI = new MainUI();
                        mainUI.setVisible(true);
                    }
                }
            }
            clicked = false;
            return new String(lbl);
        }

        @Override
        public boolean stopCellEditing() {
            clicked = false;
            return super.stopCellEditing();
        }

        @Override
        protected void fireEditingStopped() {
            super.fireEditingStopped();
        }
    }

}
