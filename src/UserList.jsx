export default function UserList() {
    const users = [
        {
            "username": "shtanriverdi",
            "status": "success",
            "message": "retrieved",
            "totalSolved": 729,
            "totalQuestions": 2941,
            "easySolved": 265,
            "totalEasy": 746,
            "mediumSolved": 419,
            "totalMedium": 1549,
            "hardSolved": 45,
            "totalHard": 646,
            "acceptanceRate": 63.56,
            "ranking": 28599,
            "contributionPoints": 2687,
            "reputation": 778,
            "submissionCalendar": {}
        },
        {
            "username": "senogenesis",
            "status": "success",
            "message": "retrieved",
            "totalSolved": 123,
            "totalQuestions": 214,
            "easySolved": 321,
            "totalEasy": 421,
            "mediumSolved": 321,
            "totalMedium": 213,
            "hardSolved": 23,
            "totalHard": 231,
            "acceptanceRate": 33.56,
            "ranking": 128599,
            "contributionPoints": 4687,
            "reputation": 18,
            "submissionCalendar": {}
        },
        {
            "username": "gülo",
            "status": "success",
            "message": "retrieved",
            "totalSolved": 123,
            "totalQuestions": 214,
            "easySolved": 321,
            "totalEasy": 421,
            "mediumSolved": 321,
            "totalMedium": 213,
            "hardSolved": 23,
            "totalHard": 231,
            "acceptanceRate": 33.56,
            "ranking": 128599,
            "contributionPoints": 4687,
            "reputation": 18,
            "submissionCalendar": {}
        }
    ];

    return (
        <>
            {users.map((user, index) => {
                return (
                    <div key={index} className="mb-10 bg-slate-200 rounded-3xl p-5 shadow-xl">
                        <h3 className="text-6xl font-semibold text-lime-400">{user.username}</h3>
                        <p className="text-5xl text-blue-400">{user.totalSolved}</p>
                        <p className="text-5xl text-green-300">{user.totalEasy}</p>
                        <p className="text-5xl text-orange-400">{user.totalMedium}</p>
                        <p className="text-5xl text-red-500">{user.totalHard}</p>
                        <p className="text-5xl text-slate-500 font-light">{user.ranking}</p>
                    </div>
                );
            })}
        </>
    );
}