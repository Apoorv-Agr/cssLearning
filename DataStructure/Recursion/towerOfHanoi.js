/*
Tower of Hanoi is a mathematical puzzle where we have three rods and n disks. The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:

1) Only one disk can be moved at a time.

2) Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.

3) No disk may be placed on top of a smaller disk.


Hint :- 
    n-> number of disks, A-> Source Tower, B-> Destination Tower, C-> Helper Tower
    Step 1-> if there are no disks
    Step 2-> Move n-1 disk from A(source) to C(Helper) using B(Destination)
    Step 3-> Print Step move n from Source to Destination
    Step 4-> Move n-1 disk from C(Helper) to B(Destination) using A(Source)

    If we observer closely in Step 2 -> A is still "The Source Tower", C has become "The Destination Tower" and B has become "The Helper Tower"

    If we observer closely in Step 4 -> C has become "The Source Tower", B has become "The Destination Tower" and A has become "The Helper Tower"
 */

function toh(n, t1, t2, t3) {
    if (n == 0) { return; }
    toh(n - 1, t1, t3, t2);
    console.log("Move Disk : ", n, " from tower [", t1, "] --> to [", t2, "]");
    toh(n - 1, t3, t2, t1);
}

toh(3, "A", "B", "C");

/*
Move Disk :  1  from tower [ A ] --> to [ B ]
Move Disk :  2  from tower [ A ] --> to [ C ]
Move Disk :  1  from tower [ B ] --> to [ C ]
Move Disk :  3  from tower [ A ] --> to [ B ]
Move Disk :  1  from tower [ C ] --> to [ A ]
Move Disk :  2  from tower [ C ] --> to [ B ]
Move Disk :  1  from tower [ A ] --> to [ B ]

 */