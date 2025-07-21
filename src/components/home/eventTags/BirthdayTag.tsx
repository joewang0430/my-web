// in plan 721

const BirthdayTag = () => {

    // Check for birthdays 
    const beijingDate = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Shanghai" }));
    const birthdayChenQirui = beijingDate.getMonth() === 1 && beijingDate.getDate() === 1;
    const birthdayGuShizhuang = beijingDate.getMonth() === 4 && beijingDate.getDate() === 27;

    return (
        <>
            <>tbd</>
            <>{birthdayChenQirui}</>
            <>{birthdayGuShizhuang}</>
        </>
    );
};

export default BirthdayTag;