


export default function Clock () {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let period = "AM";
    if (hrs == 0) {
        hrs = 12;
    } else if (hrs >= 12) {
        hrs = hrs - 12;
        period = "PM";
    }
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    let time = `${hrs}:${mins}:${period}`;
   
    setTimeout(Clock, 1000);

    return (
        <>
            <div className="border-2 border-gray-400 h-full">
                <span className="px-3 inline-block align-middle">{time}</span>
            </div>
        </>
    )
    };

