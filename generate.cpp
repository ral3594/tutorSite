#include <iostream>
using namespace std;

int main(){
    
    // INSERT INTO availability(yr, monthNum, dayNum, timeHours) VALUES (2015, 10, 23, 15);
    
    cout << "Enter start time and end time: ";
    double start;
    double end;
    cin >> start;
    cin >> end;
    cout << "Enter year, month, day: ";
    int yr = 0;
    int month = 0;
    int day = 0;
    cin>> yr >> month>> day;
    cout << yr << " "  << month << " " << day << endl;
    // cout << start;
    // cout << end;
    for (double i = start; i <= end; i = i + .5){
        cout << "INSERT INTO availability(yr, monthNum, dayNum, timeHours) VALUES (" << yr << ", " << month << ", " << day << ", " << i << ");" << endl;
    }
}