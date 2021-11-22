"using strict"
//Global Constants
const ISBLANK = "Field Entered is Blank.";
const ISNAN = "Field Entered Isn't Numeric.";
const ISOOR = "Field Entered Is Out of Range.";


// Bank Account Constants
const DEFIRST = "Nick";
const DEFLAST = "Cottner";
const DEFACCNUMBER = "1234567890";
const DEFBALANCE = 5000;
const MAXLEN = 10;

//Savings Account Constants
const SAVINGSMIN = 100;
const SAVINGSMAX = 1000000;
const IN = .20;
const SAVINGSSTART = 100;

//Checking Account Constants
const CHECKMIN = 50;
const CHECKMAX = 1000000;
const CHECKSTART = 50;

//XMAS Account Constants
const XMASMIN = 10;
const XMASMAX = 100000;
const XMASSTART = 10;


class bankAccount
{
    constructor(firstName = DEFIRST, lastName = DEFLAST, accountNumber = DEFACCNUMBER, balance = DEFBALANCE)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    validateBankAccount()
    {
        if ((this.firstName == "") || (this.lastName == ""))
        {
            return ISBLANK;
        }
        else if ((this.accountNumber == "") || (this.balance == ""))
        {
            return ISBLANK;
        }
        else if ((isNaN(this.accountNumber)) || (isNaN(this.balance)))
        {
            return ISNAN
        }
        else if(this.accountNumber.length() > MAXLEN)
        {
            return ("Field Entered Must Be Only 10 Characters in Length.")
        }
        else if (this.balance < 0)
        {
            return ISOOR;
        }
        else if (isNaN(this.balance))
        {
            return ISNAN;
        }
        else
        {
            printBankInfo()
            {
                console.log(`\nBank Account Owner: ${this.firstName} ${this.lastName}\nAccount Number: ${this.accountNumber}\nBalance: ${this.balance} `);
            }  
        }
    }
}
class savingsAccount extends bankAccount
{
    constructor(balance = SAVINGSSTART, annualInterest = IN)
    {
        super(balance, annualInterest);
        this.annualInterest = annualInterest;
    }
    get isValid()
    {
        if ((this.balance < SAVINGSMIN) || (this.balance > SAVINGSMAX))
        {
            return ISOOR;
        }
    }
    get isActive()
    {
        if (this.balance < SAVINGSSTART)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
    generateDeposit(amount)
    {
        if (this.isActive == true)
        {
            super.generateDeposit(this.balance += amount);
        }
    }
    generateWithdrawal(amount)
    {
        if (this.isActive == true)
        {
            super.generateWithdrawal(this.balance -= amount);
        }
    }
    generateAnnualInterest()
    {
        if (this.isActive == true)
        {
            super.generateAnnualInterest(this.balance += this.annualInterest);
        }
    }
}
class checkingAccount extends bankAccount
{
    constructor(balance = CHECKSTART)
    {
        super(balance);
    }
    getisValid()
    {
        if ((this.balance < CHECKMIN) || (this.balance > CHECKMAX))
        {
            return ISOOR;
        }
    }
    getisActive()
    {
        if (this.balance < CHECKMIN)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
    generateDeposit(amount)
    {
        if (this.isActive == true)
        {
            super.generateDeposit(this.balance += amount);
        }
    }
    generateWithdrawal(amount)
    {
        if (this.isActive == true)
        {
            super.generateWithdrawal(this.balance -= amount);
        }
    }
} 
class christmasClubAccount extends bankAccount
{
    constructor(balance = XMASSTART)
    {
        super(balance);
    }
    getisValid()
    {
        if ((this.balance < CHECKMIN) || (this.balance > CHECKMAX))
        {
            return ISOOR;
        }
    }
    getisActive()
    {
        if (this.balance < CHECKMIN)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
    generateDeposit(amount)
    {
        if (this.isActive == true)
        {
            super.generateDeposit(this.balance += amount);
        }
    }
    generateWithdrawal(amount)
    {
        if (this.isActive == true)
        {
            super.generateWithdrawal(this.balance -= amount);
        }
    }
}
function main()
{
    //Instantiate  bankAccount object with no parameters
    let testBankAccount = new bankAccount();
    testBankAccount.validateBankAccount();
    testBankAccount.printBankInfo();

    //Instantiate bankAccount object with parameters
    const nickAccount = new bankAccount("Nick", "Cottner", "1234567890", 500);
    nickAccount.validateBankAccount();
    nickAccount.printBankInfo();

    //Instantiate bankAccount object with Blank Fields
    const jamesAccount = new bankAccount("", "Cottner", "", 500);
    jamesAccount.validateBankAccount();
    jamesAccount.printBankInfo();

    //Instantiate bankAccount Object with Non Numeric Fields
    const kellyAccount = new bankAccount("Kelly", "Berry", "0987654321", "failed this test");
    kellyAccount.validateBankAccount();
    kellyAccount.printBankInfo();

    //Instantiate bankAccount Object with oor fields
    const ericAccount = new bankAccount("Eric", "Cottner", "1234567890", -100);
    ericAccount.validateBankAccount();
    ericAccount.printBankInfo();


    //Instantiate  savingsAccount object with no parameters
    let testBankAccount = new savingsAccount();
    testBankAccount.validateBankAccount();
    testBankAccount.printBankInfo();

    //Instantiate savingsAccount object with parameters
    const nickAccount = new savingsAccount("Nick", "Cottner", "1234567890", 500);
    nickAccount.validateBankAccount();
    nickAccount.printBankInfo();

    //Instantiate savingsAccount object with Blank Fields
    const jamesAccount = new savingsAccount("", "Cottner", "", 500);
    jamesAccount.validateBankAccount();
    jamesAccount.printBankInfo();

    //Instantiate savingsAccount Object with Non Numeric Fields
    const kellyAccount = new savingsAccount("Kelly", "Berry", "0987654321", "failed this test");
    kellyAccount.validateBankAccount();
    kellyAccount.printBankInfo();

    //Instantiate savingsAccount Object with oor fields
    const ericAccount = new savingsAccount("Eric", "Cottner", "1234567890", -100);
    ericAccount.getisValid();
    ericAccount.getisActive();

    //Instantiate savingsAccount Object with Withdrawal
    const ericAccount = new savingsAccount(600, 200, 400);
    ericAccount.generateWithdrawal();

    //Instantiate savingsAccount Object with Deposit
    const curtAccount = new savingsAccount(500, 200, 700);
    curtAccount.generateDeposit();

    //Instantiate savingsAccount object with interest
    const bettyAccount = new savingsAccount("Betty", "Cottner", "1234567890", 500, .20, 600);
    bettyAccount.generateAnnualInterest();
    

    //Instantiate  checkingAccount object with no parameters
    let testBankAccount = new checkingAccount();
    testBankAccount.getisActive();
    testBankAccount.getisValid();

    //Instantiate checkingAccount object with parameters
    const nickAccount = new checkingAccount("Nick", "Cottner", "1234567890", 500);
    nickAccount.getisActive();
    nickAccount.getisValid();

    //Instantiate checkingAccount object with Blank Fields
    const jamesAccount = new checkingAccount("", "Cottner", "", 500);
    jamesAccount.validateBankAccount();
    jamesAccount.printBankInfo();

    //Instantiate savingsAccount Object with Non Numeric Fields
    const kellyAccount = new checkingAccount("Kelly", "Berry", "0987654321", "failed this test");
    kellyAccount.validateBankAccount();
    kellyAccount.printBankInfo();

    //Instantiate savingsAccount Object with oor fields
    const ericAccount = new checkingAccount("Eric", "Cottner", "1234567890", -100);
    ericAccount.getisValid();
    ericAccount.getisActive();

    //Instantiate savingsAccount Object with Withdrawal
    const ericAccount = new checkingAccount(600, 200, 400);
    ericAccount.getisValid();
    ericAccount.getisActive();
    ericAccount.generateWithdrawal();

    //Instantiate savingsAccount Object with Deposit
    const ericAccount = new checkingAccount(500, 200, 700);
    ericAccount.getisValid();
    ericAccount.getisActive();
    ericAccount.generateDeposit();

    //Instantiate savingsAccount object with interest
    const bettyAccount = new checkingAccount("Betty", "Cottner", "1234567890", 500, .20, 600);
    bettyAccount.getisValid();
    bettyAccount.getisActive();
    bettyAccount.generateAnnualInterest();
    

    //Instantiate  checkingAccount object with no parameters
    let testBankAccount = new christmasClubAccount();
    testBankAccount.getisActive();
    testBankAccount.getisValid();

    //Instantiate checkingAccount object with parameters
    const nickAccount = new christmasClubAccount("Nick", "Cottner", "1234567890", 500);
    nickAccount.getisActive();
    nickAccount.getisValid();

    //Instantiate checkingAccount object with Blank Fields
    const jamesAccount = new christmasClubAccount("", "Cottner", "", 500);
    jamesAccount.validateBankAccount();
    jamesAccount.printBankInfo();

    //Instantiate savingsAccount Object with Non Numeric Fields
    const kellyAccount = new christmasClubAccount("Kelly", "Berry", "0987654321", "failed this test");
    kellyAccount.validateBankAccount();
    kellyAccount.printBankInfo();

    //Instantiate savingsAccount Object with oor fields
    const ericAccount = new christmasClubAccount("Eric", "Cottner", "1234567890", -100);
    ericAccount.getisValid();
    ericAccount.getisActive();

    //Instantiate savingsAccount Object with Withdrawal
    const ericAccount = new christmasClubAccount(600, 200, 400);
    ericAccount.getisValid();
    ericAccount.getisActive();
    ericAccount.generateWithdrawal();

    //Instantiate savingsAccount Object with Deposit
    const ericAccount = new christmasClubAccount(500, 200, 700);
    ericAccount.getisValid();
    ericAccount.getisActive();
    ericAccount.generateDeposit();

    //Instantiate savingsAccount object with interest
    const bettyAccount = new christmasClubAccount("Betty", "Cottner", "1234567890", 500, .20, 600);
    bettyAccount.getisValid();
    bettyAccount.getisActive();
    bettyAccount.generateAnnualInterest();
}

    