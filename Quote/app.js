let quote = ["“The most complete gift of God is a life based on knowledge.” — Imam Ali",
    "“The time is always right to do what is right.” — Martin Luther King, Jr.",
    "“If you’re offered a seat on a rocket ship, don’t ask what seat. Just get on.” — Sheryl Sandberg",
    "“Winning isn’t everything, but wanting to win is.” — Vince Lombardi",
    "“Don’t watch the clock; do what it does. Keep going.” — Sam Levenson",
    "“And in the end, the love you take is equal to the love you make.” — The Beatles, ",
    "“Life is either a daring adventure or nothing.” — Helen Keller",
    " “Turn your wounds into wisdom.” — Oprah Winfrey",
    " “Life isn’t about finding yourself. Life is about creating yourself.” — George Bernard Shaw",
    "“Happiness is not by chance, but by choice.” — Jim Rohn",
    "“Just do it.” — Nike",
    "“Think different.”  — Apple",
    "“Impossible is nothing.” — Adidas",
    "“The only impossible journey is the one you never begin.” — Tony Robbins",
    "“Whoever shows you your faults, he is your true friend.” — Imam Ali"
]

function generatequote() {
    let quotes = Math.floor(Math.random() * quote.length);
    document.getElementById("quotess").textContent = quote[quotes];;
}