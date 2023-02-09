export default async (request: Request) => {
    const crewStats = await fetch('https://gpadcrew.com/api/member/count')
        .then((res) => res.json());

    return new Response(JSON.Stringify(crewStats), {
        status: 200,
        headers: {
        "Content-Type": "application/json"
        }
    });
};
