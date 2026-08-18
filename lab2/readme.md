C - Create/add/insert
R - Retive/view/get
U - Update/edit
D - Delete/Remove


// Fs
Fs - file system.
node library.
it always interact with operating system.


//
# FS (file system) Node
JS's Module

it direct connect with client OS rather than browser

## Major task of FS Module

- Reading and Writing Files
  -> readFile()
  -> writeFile()
  -> appendFile()

- Directory Management
  -> mkdir()
  -> rmdir()- depricated
  -> readdir()

- Metadata/ Information
  -> stat()
  -> lstat()
  -> fstat()

- Watching for Changes
  -> watch()
  -> watchFile()
  -> unwatchFile()

- Steaming Large File
  -> createReadStream()
  -> createWriteStream()
  
- File Operations
  -> rename()
  -> truncate()
  -> unlike()
  -> link()
  -> syslink()


## CRUD Operation 


Create/Insert, read/Retrive, uptadte, Delete 
->Each items (id, name, price, quantite) uptadte quantity from cart

## Item
id, name, price, quantity


## Operations 
1. ADD to Cart
2. Show Cart
3. Remove from Cart
4. Update quantity from cart
5. Checkout
   NOTE: All item will be stored in hdd, so after temination of program we can retrive cart dertails

## Required File

1. crud.js - it contains all the methods and entry point
2. products.js - it contains the produt details in array from