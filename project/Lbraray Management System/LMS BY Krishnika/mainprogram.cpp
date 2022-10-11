#include <iostream>
#include <string>
#include <cstring> 

using namespace std;

/*The Library Management System 
the system designed to be used by the library admin and the Users

Techniques used: 
1. linked list
2. array


/*declare the linked list variables*/
struct UserRecord { // this struct will hold User details
	string UID; 
	string UName; 
	string Phone; 
	int BorrowNo;
	int ReturnNo;
	string BorrowingBook[3][5];
	string ReturningBook[15][5];
	UserRecord* Next; 
};
struct BookRecord {
	string bID;
	string btitle; 
	string category; 
	string genre; 
	bool availability;
	BookRecord* Next2;
};


UserRecord* Head = NULL; 
BookRecord* Head2 = NULL; 
int place = 0, place2 = 0, posi = 0;
char choice, option1, option2;
int position;

string Booktitle, bcateg, bgenre, borrowdate, bkid, UID;

string UIDInput; 
string UNameInput;
string PhoneInput; 
string BorrowingBookInput[3][5];
string ReturningBookInput[15][5];
int BorrowNoInput;

string bIDInput;
string btitleInput;
string categoryInput;
string genreInput;
bool availabilityInput;

string genre1 = "Drama";
string genre2 = "Romance";
string genre3 = "Historical";
string genre4 = "Realistic";
string genre5 = "Fan";
string genre6 = "Narrative";
string genre7 = "Biography";
string genre8 = "Periodicals";
string genre9 = "Self-help";
string genre10 = "Reference";
string category1 = "Fiction";
string category2 = "Non-Fiction";

void SignIn();
void AddBook();
void AddUser();
void DisplayBook(BookRecord* Head);
void DisplayBookA(BookRecord* Head);
BookRecord* SearchBook(string title, BookRecord* Head);
bool searchU(string UID, UserRecord* Head);
bool Searchb(string bid, BookRecord* Head);
void returnbook();
void borrowBook(string biD, BookRecord* Head2);
void borrowbooku(string biD, UserRecord* Head);
void searchURecord(UserRecord* Head);
void UlastborrowedB(UserRecord* Head);
BookRecord* UpdateBook(string biD, BookRecord* Head);
void UpdateUInfo();
void DisplayUsers(UserRecord* Head);
void linkedlistU(string Userid, string UName, string phone, int index);
void linkedlistb(string bid, string Btitle, string bcategory, string bgerne, bool avaiable, int index);

/*insert new record arbitrary for User */
void linkedlistU(string Userid, string UName, string phone, int index)
{
	UserRecord* New_node = new UserRecord; 
	New_node->UID = Userid;    
	New_node->UName = UName;
	New_node->Phone = phone;
	New_node->BorrowNo = 0;
	New_node->ReturnNo = 0;
	if (index <= place) {
		if (index == 0) { 
			UserRecord* Position = new UserRecord;
			Position->UID = Userid;    
			Position->UName = UName;
			Position->Phone = phone;
			Position->BorrowNo = 0;
			Position->ReturnNo = 0;
			Position->Next = Head;
			Head = Position;}
		else if (index == place) { 
			UserRecord* Position2 = new UserRecord; 
			Position2->UID = Userid;    
			Position2->UName = UName;
			Position2->Phone = phone;
			Position2->BorrowNo = 0;
			Position2->ReturnNo = 0;
			Position2->Next = NULL;   
			if (Head == NULL)
				Head = Position2; 
			else { 
				UserRecord* MyCurrent1 = Head; 
				while (MyCurrent1->Next != NULL) {
					MyCurrent1 = MyCurrent1->Next; 
				}
				MyCurrent1->Next = Position2; 
			}                                
		}
		else { 
			UserRecord* new_record = new UserRecord; 
			new_record->UID = Userid;    
			new_record->UName = UName;
			new_record->Phone = phone;
			new_record->BorrowNo = 0;
			new_record->ReturnNo = 0;
			UserRecord* prev = Head; 
			for (int i = 0; i < index - 1; i++)
				prev = prev->Next;
			new_record->Next = prev->Next;
			prev->Next = new_record;
		}
	}
	else if (index > place)
	{
		UserRecord* Position2 = new UserRecord; 
		Position2->UID = Userid;    
		Position2->UName = UName;
		Position2->Phone = phone;
		Position2->BorrowNo = 0;
		Position2->ReturnNo = 0;
		Position2->Next = NULL;
		if (Head == NULL) {
			Head = Position2; 
		}
		else {
			UserRecord* MyCurrent1 = Head; 
			while (MyCurrent1->Next != NULL) {
				MyCurrent1 = MyCurrent1->Next;}
			MyCurrent1->Next = Position2;
		}
	}
}

void linkedlistb(string bid, string Btitle, string bcategory, string bgerne, bool avaiable, int index){
	BookRecord* New_node = new BookRecord; 
	New_node->bID = bid;
	New_node->btitle = Btitle;
	New_node->category = bcategory;
	New_node->genre = bgerne;
	New_node->availability = avaiable;
	if (index <= place2) { 
		if (index == 0) { 
			BookRecord* Position = new BookRecord;
			Position->bID = bid;
			Position->btitle = Btitle;
			Position->category = bcategory;
			Position->genre = bgerne;
			Position->availability = avaiable;
			Position->Next2 = Head2;
			Head2 = Position;
		} 
		
		else if (index == place2)
		{ 
			BookRecord* Position2 = new BookRecord; //create new node
			Position2->bID = bid;
			Position2->btitle = Btitle;
			Position2->category = bcategory;
			Position2->genre = bgerne;
			Position2->availability = avaiable;
			Position2->Next2 = NULL;  
			if (Head2 == NULL)
				Head2 = Position2; 
			else { 
				BookRecord* MyCurrent1 = Head2;
				while (MyCurrent1->Next2 != NULL) {
					MyCurrent1 = MyCurrent1->Next2; 
				}
				MyCurrent1->Next2 = Position2; 
			}                                 
		}
		
		else { 
			BookRecord* new_record = new BookRecord; 
			new_record->bID = bid;
			new_record->btitle = Btitle;
			new_record->category = bcategory;
			new_record->genre = bgerne;
			new_record->availability = avaiable;
			BookRecord* prev = Head2; 
			for (int i = 0; i < index - 1; i++)
				prev = prev->Next2;
			new_record->Next2 = prev->Next2;
			prev->Next2 = new_record;
		}
	}
	
	else if (index > place2){ 
		BookRecord* Position2 = new BookRecord; // create new recode
		Position2->bID = bid;
		Position2->btitle = Btitle;
		Position2->category = bcategory;
		Position2->genre = bgerne;
		Position2->availability = avaiable;
		Position2->Next2 = NULL;
		if (Head2 == NULL) {
			Head2 = Position2; // insert at the beginning of the linked list
		}
		else {
			BookRecord* MyCurrent1 = Head2; 
			while (MyCurrent1->Next2 != NULL) {
				MyCurrent1 = MyCurrent1->Next2;
			}
			MyCurrent1->Next2 = Position2;
		}
	}
}

/*display record info*/
void DisplayBook(BookRecord* Head) {
	BookRecord* MyCurrent1 = Head;
	if (MyCurrent1 == NULL) {/*checking if the linked list is empty or not*/
		cout << "NO recode yet!!, please insert new recodes first..." << endl;}
	while (MyCurrent1 != NULL) { /*displaying the inserted nodes*/
		cout << " Book ID           : " << MyCurrent1->bID << endl;
		cout << " Book title        : " << MyCurrent1->btitle << endl;
		cout << " Book category     : " << MyCurrent1->category << endl;
		cout << " Book Genre        : " << MyCurrent1->genre << endl;
		cout << " Book availability(1=True & 0= False) : " << MyCurrent1->availability << endl;
		cout << "|------------------------------------------------------------------|" << endl;
		MyCurrent1 = MyCurrent1->Next2;// go to next
	}
}
/*display Users records with the active borrowed books*/
void DisplayUsers(UserRecord* Head) {
	UserRecord* MyCurrent1 = Head;
	if (MyCurrent1 == NULL) {
		cout << "NO recode yet!!, please insert new recodes first..." << endl;
	}
	while (MyCurrent1 != NULL) {
		cout << " User ID              : " << MyCurrent1->UID << endl;
		cout << " User Name            : " << MyCurrent1->UName << endl;
		cout << " User Phone NO        : " << MyCurrent1->Phone << endl;
		cout << " Number of borrowed book: " << MyCurrent1->BorrowNo << endl;
		cout << " The borrowed books: \n"<<endl;
		for (int i = 0; i < MyCurrent1->BorrowNo; i++)
		{
			cout << " Book ID                : " << MyCurrent1->BorrowingBook[i][0] << endl;
			cout << " Book title             : " << MyCurrent1->BorrowingBook[i][1] << endl;
			cout << " Book category          : " << MyCurrent1->BorrowingBook[i][2] << endl;
			cout << " Book Genre             : " << MyCurrent1->BorrowingBook[i][3] << endl;
			cout << " Borrow Date            : " << MyCurrent1->BorrowingBook[i][4] << endl;
			cout << "|------------------------------------------------|" << endl;
		}
		MyCurrent1 = MyCurrent1->Next;// go to next
	}
}
/*display last 10 borrowed book*/
void UlastborrowedB(UserRecord* Head) {
	UserRecord* MyCurrent1 = Head;
	string name;
	cout << "\nEnter User Name or ID: "; cin >> name;
	if (MyCurrent1 == NULL) {
		cout << "NO recode yet!!, please insert new recodes first..." << endl;
	}
	while (MyCurrent1 != NULL) {
		if (name == MyCurrent1->UName || name == MyCurrent1->UID) {
			cout << " User ID              : " << MyCurrent1->UID << endl;
			cout << " User Name            : " << MyCurrent1->UName << endl;
			cout << " User Phone NO        : " << MyCurrent1->Phone << endl;
			cout << " Number of borrowed book: " << MyCurrent1->BorrowNo << endl;
			cout << " The borrowed books: \n" << endl;
			for (int i = 0; i < MyCurrent1->ReturnNo; i++)
			{
				if (i ==10)
				{
					break;
				}
				cout << " Book ID                : " << MyCurrent1->ReturningBook[i][0] << endl;
				cout << " Book title             : " << MyCurrent1->ReturningBook[i][1] << endl;
				cout << " Book category          : " << MyCurrent1->ReturningBook[i][2] << endl;
				cout << " Book Genre             : " << MyCurrent1->ReturningBook[i][3] << endl;
				cout << " Borrow Date            : " << MyCurrent1->ReturningBook[i][4] << endl;
				cout << "|------------------------------------------------|" << endl;
			}
			break;
		}
		else
		{
			MyCurrent1 = MyCurrent1->Next;// go to next
		}
	}
}
/*search User record*/
void searchURecord(UserRecord* Head) {
	UserRecord* MyCurrent1 = Head;
	string sname;
	cout << "\nEnter User Name or ID: "; cin >> sname;
	if (MyCurrent1 == NULL) {
		cout << "NO recode yet!!, please insert new recodes first..." << endl;}
	while (MyCurrent1 != NULL) {
		if (sname == MyCurrent1->UName || sname == MyCurrent1->UID) {
			cout << " User ID              : " << MyCurrent1->UID << endl;
			cout << " User Name            : " << MyCurrent1->UName << endl;
			cout << " User Phone NO        : " << MyCurrent1->Phone << endl;
			cout << " Number of borrowed book: " << MyCurrent1->BorrowNo << endl;
			cout << " The borrowed books: \n" << endl;
			for (int i = 0; i < MyCurrent1->BorrowNo; i++)
			{
				cout << " Book ID                : " << MyCurrent1->BorrowingBook[i][0] << endl;
				cout << " Book title             : " << MyCurrent1->BorrowingBook[i][1] << endl;
				cout << " Book category          : " << MyCurrent1->BorrowingBook[i][2] << endl;
				cout << " Book Genre             : " << MyCurrent1->BorrowingBook[i][3] << endl;
				cout << " Borrow Date            : " << MyCurrent1->BorrowingBook[i][4] << endl;
				cout << "|------------------------------------------------|" << endl;
			}
			break;
		}
		else
		{
			MyCurrent1 = MyCurrent1->Next;// go to next
		}
	}
}
/*display the avaiable books*/
void DisplayBookA(BookRecord* Head) {
	BookRecord* MyCurrent1 = Head;
	if (MyCurrent1 == NULL) {
		cout << "NO recode yet!!, please insert new recodes first..." << endl;
	}
	while (MyCurrent1 != NULL) {
		if (MyCurrent1->availability == true) {

			cout << " Book ID           : " << MyCurrent1->bID << endl;
			cout << " Book title        : " << MyCurrent1->btitle << endl;
			cout << " Book category     : " << MyCurrent1->category << endl;
			cout << " Book Genre        : " << MyCurrent1->genre << endl;
			cout << " Book availability(1=True & 0= False) : " << MyCurrent1->availability << endl;
		}
		cout << "|-------------------------------------------------------------------------|" << endl;
		MyCurrent1 = MyCurrent1->Next2;// go to next
	}
}
/*search book*/
BookRecord* SearchBook(string title, BookRecord* Head) {
	BookRecord* MyCurrent = Head;
	if (MyCurrent == NULL) {
		cout << "NO recode yet!!, please insert new recodes first..." << endl;
	}
	while (MyCurrent != NULL) { 
		if (MyCurrent->btitle == title|| MyCurrent->genre == title|| MyCurrent->category == title || MyCurrent->availability == true) {
			cout << " Book ID           : " << MyCurrent->bID << endl;
			cout << " Book title        : " << MyCurrent->btitle << endl;
			cout << " Book category     : " << MyCurrent->category << endl;
			cout << " Book Genre        : " << MyCurrent->genre << endl;
			cout << " Book availability(1=True & 0= False) : " << MyCurrent->availability << endl;
			cout << "|-------------------------------------------------------------------------|" << endl;
			return MyCurrent;
		}
		else {
			MyCurrent = MyCurrent->Next2; //go to next record
		}
	}
	return NULL;
}

/*search the avaiability*/
bool Searchb(string bid, BookRecord* Head)
{
	BookRecord* MyCurrent = Head;
	while (MyCurrent != NULL) {
		if (MyCurrent->bID == bid) {
			return true;
		}
		else {
			MyCurrent = MyCurrent->Next2; //go to next record
		}
	}
	return false;
}

/*search function for User */
bool searchU(string UID, UserRecord* Head) 
{
	UserRecord* MyCurrent = Head;
	while (MyCurrent != NULL) {
		if (MyCurrent->UID == UID) {
			return true;
		}
		else {
			MyCurrent = MyCurrent->Next; //go to next record
		}
	}
	return false;
}
/*update the book record*/
BookRecord* UpdateBook(string biD, BookRecord* Head) {
	BookRecord* MyCurrent1 = Head;
	string Booktitle, bcategory, bgenre;
	while (MyCurrent1 != NULL) { 
		if (MyCurrent1->bID == biD) { 
			getchar();
			cout << "Enter Book title: ";
			getline(cin, Booktitle, '\n');
			cout << "Enter Book Category(1. Fiction  2. Non-Fiction): "; cin >> option1;
			if (option1 == '1') {
				bcategory = category1;
				cout << "\nBook genres: ";
				cout << "1. Drama   2. Romance   3. Historical  4. Realistic  5. Fan\nEnter one option:  ";
				cin >> option2;
				if (option2 == '1') {
					bgenre = genre1;
				}
				else if (option2 == '2') {
					bgenre = genre2;
				}
				else if (option2 == '3') {
					bgenre = genre3;
				}
				else if (option2 == '4') {
					bgenre = genre4;
				}
				else {
					bgenre = genre5;
				}
			}
			else {
				bcategory = category2;
				cout << "Book genres: ";
				cout << "1. Drama   2. Romance   3. Historical  4. Realistic  5. Fan\nEnter one option:  ";
				cin >> option2;
				if (option2 == '1') {
					bgenre = genre6;
				}
				else if (option2 == '2') {
					bgenre = genre7;
				}
				else if (option2 == '3') {
					bgenre = genre8;
				}
				else if (option2 == '4') {
					bgenre = genre9;
				}
				else {
					bgenre = genre10;
				}
			}
			MyCurrent1->btitle = Booktitle;
			MyCurrent1->category = bcategory;
			MyCurrent1->genre = bgenre;
			cout << "The New Details" << endl;
			cout << " Book ID           : " << MyCurrent1->bID << endl;
			cout << " Book title        : " << MyCurrent1->btitle << endl;
			cout << " Book category     : " << MyCurrent1->category << endl;
			cout << " Book Genre        : " << MyCurrent1->genre << endl;
			cout << " Book availability(1=True & 0= False) : " << MyCurrent1->availability << endl;
			cout << "|-------------------------------------------------------------------------|" << endl;
			return MyCurrent1;
		}
		else
			MyCurrent1 = MyCurrent1->Next2; 	
	}
	return NULL;
}
/*update User info*/
void UpdateUInfo()
{
	UserRecord* MyCurrent = Head;
	cout << "Enter User ID: "; cin >> UIDInput;
	while (MyCurrent != NULL) {
		if (MyCurrent->UID == UIDInput) {
			cout << "\nPlease fill up The new info: \n" << endl;
			getchar();
			cout << "Enter User Name: "; getline(cin, UNameInput, '\n');
			cout << "Enter Phone No   : "; getline(cin, PhoneInput, '\n');
			MyCurrent->UName = UNameInput;
			MyCurrent->Phone = PhoneInput;
			break;
		}
		else {
			MyCurrent = MyCurrent->Next; 
		}
	}
	return;
}
/*borrow a book*/
void borrowbooku(string UID, UserRecord* Head) {
	UserRecord* MyCurrent2 = Head;
	while (MyCurrent2 != NULL){
		if (MyCurrent2->BorrowNo >=3) {
			cout << "\n <!>  The User has reached the maximum number of borrowing books(which is 3 books)<!>\n";
			cout << "\nNoted: The User may return one of the borrowed book to be able to borrow a new book\n";
			break;}
		if (MyCurrent2->UID == UID) {
			cout << "\nNote: return the book within 15 days after the borrowing date!\n";
			cout << "Enter borrowing date(Y/M/D): "; cin >> borrowdate;
			for (int i = MyCurrent2->BorrowNo; i < MyCurrent2->BorrowNo+1; i++){
				MyCurrent2->BorrowingBook[i][0] = bkid;
				MyCurrent2->BorrowingBook[i][1] = Booktitle;
				MyCurrent2->BorrowingBook[i][2] = bcateg;
				MyCurrent2->BorrowingBook[i][3] = bgenre;
				MyCurrent2->BorrowingBook[i][4] = borrowdate;}		
			MyCurrent2->BorrowNo += 1;
			cout << "The Borrowing Details" << endl;
			cout << " User ID         : " << MyCurrent2->UID << endl;
			cout << " User Name       : " << MyCurrent2->UName << endl;
			cout << " Book ID           : " << MyCurrent2->BorrowingBook[MyCurrent2->BorrowNo-1][0] << endl;
			cout << " Book title        : " << MyCurrent2->BorrowingBook[MyCurrent2->BorrowNo - 1][1] << endl;
			cout << " Book category     : " << MyCurrent2->BorrowingBook[MyCurrent2->BorrowNo - 1][2] << endl;
			cout << " Book Genre        : " << MyCurrent2->BorrowingBook[MyCurrent2->BorrowNo - 1][3] << endl;
			cout << " Borrow Date       : " << MyCurrent2->BorrowingBook[MyCurrent2->BorrowNo - 1][4] << endl;
			cout << "|-------------------------------------------------------------------------|" << endl;
			break;
		}
		else
			MyCurrent2 = MyCurrent2->Next;
	}
}
void borrowBook(string biD,BookRecord* Head2) {
	BookRecord* MyCurrent1 = Head2;
	while (MyCurrent1 != NULL) {
		if (MyCurrent1->bID == biD && MyCurrent1->availability == true) {
			bkid= MyCurrent1->bID; 
			Booktitle = MyCurrent1->btitle;
			bcateg = MyCurrent1->category;
			bgenre = MyCurrent1->genre;
			cout << "Enter User ID: "; cin >> UID;
			if (searchU(UID, Head) == false)
			{
				cout << "\nThis UID is not avaiable yet. Pls try again with new ID\n" << endl;
				break;}
			else {
				borrowbooku(UID,Head);
				MyCurrent1->availability = false;
				break;
			}
		}
		else
			MyCurrent1 = MyCurrent1->Next2;
	}
}

/*return the book*/
void returnbook() {
	UserRecord* MyCurrent1 = Head;
	string Userid,bid;
	cout << "\nEnter User ID: "; cin >> Userid;
	cout << "\nEnter Book ID to return it: "; cin >> bid;
	if (MyCurrent1 == NULL) {
		cout << "NO recode yet!!, please insert new recodes first..." << endl;}
	while (MyCurrent1 != NULL) {
		if (Userid == MyCurrent1->UID) {
			for (int i = 0; i < MyCurrent1->BorrowNo; i++){
				if (MyCurrent1->BorrowingBook[i][0] == bid) {
					for (int ii = MyCurrent1->ReturnNo; ii < MyCurrent1->ReturnNo+1; ii++)
					{   
						MyCurrent1->ReturningBook[ii][0] = MyCurrent1->BorrowingBook[ii][0];
						MyCurrent1->ReturningBook[ii][1] = MyCurrent1->BorrowingBook[ii][1];
						MyCurrent1->ReturningBook[ii][2] = MyCurrent1->BorrowingBook[ii][2];
						MyCurrent1->ReturningBook[ii][3] = MyCurrent1->BorrowingBook[ii][3];
						MyCurrent1->ReturningBook[ii][4] = MyCurrent1->BorrowingBook[ii][4];}
					
					BookRecord* reader = Head2;
					while (reader != NULL){
						if (reader->bID == bid) {
							reader->availability = true;
							break;}
						reader = reader->Next2;}
					
					int a, j, k;
					int NoColumn = 5;
					int NORows = 3;
					for (a = 0; a < NORows; a++) {
						for (k = a; k < NORows - 1; k++) {
							for (j = 0; j < NoColumn; j++) {
								MyCurrent1->BorrowingBook[k][j] = MyCurrent1->BorrowingBook[k + 1][j];}
						}
						a--;
						NORows--;
					}
				}		
			}
			MyCurrent1->ReturnNo += 1;
			MyCurrent1->BorrowNo -= 1;
			cout << "\n <!> The book has been returned successfully  <!>\n";
			break;
		}
		else
		{
			MyCurrent1 = MyCurrent1->Next;// go to next
		}
	}
}
/*function to store the book details such as id, title, categorey, genre, avaiability*/
void AddBook(){
	cout << "\nPlease fill up the following requirements: \n" << endl;
	cout << "\n\nEnter Book ID: "; cin >> bIDInput;
	if (Searchb(bIDInput, Head2) == true) {
		cout << "\n This ID has been used before !!\n" << endl;}
	else {
		getchar();
		cout << "Enter Book Title: "; getline(cin, btitleInput, '\n');
		cout << "Enter Book Category(1. Fiction  2. Non-Fiction): "; cin >> option1;
		if (option1 == '1') {
			categoryInput = category1;
			cout << "Enter Book genre: ";
			cout << "1. Drama   2. Romance   3. Historical  4. Realistic  5. Fan\nEnter one option:  ";
			cin >> option2;
			if (option2 == '1') {
				genreInput = genre1;
			}
			else if (option2 == '2') {
				genreInput = genre2;
			}
			else if (option2 == '3') {
				genreInput = genre3;
			}
			else if (option2 == '4') {
				genreInput = genre4;
			}
			else {
				genreInput = genre5;
			}
		}
		else {
			categoryInput = category2;
			cout << "Enter Book genre: ";
			cout << "1. Drama   2. Romance   3. Historical  4. Realistic  5. Fan\nEnter one option:  ";
			cin >> option2;
			if (option2 == '1') {
				genreInput = genre6;
			}
			else if (option2 == '2') {
				genreInput = genre7;
			}
			else if (option2 == '3') {
				genreInput = genre8;
			}
			else if (option2 == '4') {
				genreInput = genre9;
			}
			else {
				genreInput = genre10;
			}
		}
		availabilityInput = true;
		cout << "Enter the position you want to save the recode: "; cin >> position;
		linkedlistb(bIDInput, btitleInput, categoryInput, genreInput, availabilityInput, position);
		place2++;
	}
	return;
}

/*add User account*/
void AddUser()
{
	cout << "\nPlease fill up the following requirements: \n" << endl;
	cout << "Enter User ID: "; cin >> UIDInput;
	if (searchU(UIDInput, Head) == true) {
		cout << "\n This ID has been used before !!\n" << endl;
	}
	else
	{
		getchar();
		cout << "Enter User Name: "; getline(cin, UNameInput, '\n');
		cout << "Enter Phone No: "; getline(cin, PhoneInput, '\n');
		cout << "Enter the position you want to save the recode: "; cin >> position;
		linkedlistU(UIDInput, UNameInput, PhoneInput, position);
		place++;
	}
	return;
}

/*SignIn page*/
void SignIn() {
	system("color 2");
	string pin;
	system("cls");
	cout << "\n       <=======>  Library Management System (LMS)  <=======>\n";
	cout << "\n                         <=======>  By- Krishnika Gupta  <=======>\n";
	cout << "\nEnter your PIN to access :: "; cin >> pin;
	if (pin == "krishna@123") {
		cout << "\n  <>  Correct PIN <> \n";
		system("pause");
		system("cls");
	}
	else {
		cout << "\n  <> Wrong PIN <>\n";
		SignIn();
	}
}

/*the main function of the system */
int main() {
	string sbtitle;
	string bookid, borrowid;
	SignIn();
	system("color 4");/*changing the color to red*/

	do{
		cout<< "\n\n       <=======>  Library Management System <=======>\n";
		cout << "\n\n       <=======>  By Krishnika Gupta <=======>\n";
		cout<<"\n\n  1. Book Services       2. User Services     3. Exit"<<endl;
		cout << "\n\nEnter one choice: "; cin >> choice;
		switch (choice){
		case '1':
			do{
				cout << "\n\n       <=======>  User Service  <=======>\n";
				cout<<	" \n\n1. Add New Book    2. Display Books   3. Search Book\n\n  4. Update Book Information    5. Back" << endl;
				cout << "\n\nEnter one choice: "; cin >> choice;
				switch (choice)
				{
				case '1':
					AddBook();
					break;
				case '2':
					cout << "\n1. Display all books.     2. Display the avaiable books only. \nEnter one option: "; cin >> choice;
					if (choice == '1') {
						DisplayBook(Head2);
					}
					else {
						DisplayBookA(Head2);
					}
					cout << "\nDo you want to borrow any book: (1. Yes  2. NO): "; cin >> choice;
					if (choice == '1') {

						cout << "Enter Book ID: "; cin >> borrowid;
						borrowBook(borrowid, Head2);
					}
					else {
						cout << "\n Backing to the main menu....\n" << endl;
					}
					break;
				case '3':
					getchar();
					cout << "\nEnter the book title or category or genre to search: "; getline(cin, sbtitle, '\n');
					SearchBook(sbtitle, Head2);
					cout << "\nDo you want to borrow any book: (1. Yes  2. NO): "; cin>> choice;
					if (choice == '1') {
						
						cout << "Enter Book ID: "; cin >> borrowid;
						borrowBook(borrowid, Head2);
					}
					else {
						cout << "\n Backing to the main menu....\n" << endl;
					}
					break;
				case '4':
					cout << "\nEnter Book ID to update: "; cin >> bookid;
					UpdateBook(bookid, Head2);
					break;
				case '5':
					cout << "\n Backing to the main menu....\n" << endl;
					break;
				default:
					cerr << "\n\n <!!!>    Wrong Choice   <!!!>" << endl;
					break;
				}
				system("pause");
				system("cls");
			} while (choice != '5');
			break;
		case '2':
			do
			{
				cerr << "\n\n       <=======>  Users Service  <=======>\n"
					"  1. Add New User    2. Display the last 10 books borrowed by a User\n"
					"  3. Search User     4. Update User Info       5. Return a Borrowed book\n"
					"  6. View all Users with active book borrowed.   7. Back" << endl;
				cout << "Enter one choice: "; cin >> choice;
				switch (choice)
				{
				case '1':
					AddUser();
					break;
				case '2':
					UlastborrowedB(Head);
					break;
				case '3':
					searchURecord(Head);
					break;
				case '4':
					UpdateUInfo();
					break;
				case '5':
					returnbook();
					break;
				case '6':
					DisplayUsers(Head);
					break;
				case '7':
					cout << "\n Backing to the main menu....\n" << endl;
					break;
				default:
					cerr << " <!!!>    Wrong Choice   <!!!>" << endl;
					break;
				}
				system("pause");
				system("cls");
			} while (choice != '7');
			break;
		case '3':
			cout <<"\n <***>  See You Soon ! :)    <***>\n"<<endl;
			break;
		default:
			cerr << "\n\n <!!!>    Wrong Choice   <!!!>"<<endl;
			break;
		}
		system("pause");
		system("cls");
	} while (choice != '3');
	return 0;
}
