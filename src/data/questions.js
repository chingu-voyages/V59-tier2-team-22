const QUESTIONS_DATA = [
  [
    {
      role: "Scrum Product Owner",
      focus:
        "Backlog management, maximizing value, stakeholder management (Aligns with CSPO)",
      flashcards: [
        {
          id: 1,
          question:
            "You have a long list of features stakeholders want, but the team can only finish three this sprint. How do you decide which ones to build?",
          options: {
            A: "Ask the Lead Developer which ones are the easiest to code.",
            B: "Choose the features that deliver the highest value to the customer right now.",
            C: "Pick the features requested by the most senior manager.",
            D: "Randomly select three to keep it fair.",
          },
          answer: "B",
          rationale:
            "The Product Owner's main responsibility is to maximize the value of the product. You prioritize based on business value and user needs, not just ease or authority.",
        },
        {
          id: 2,
          question:
            "A developer asks you to clarify a requirement for a user story during the Sprint. What is the best immediate action?",
          options: {
            A: "Tell them to wait until the next Sprint Planning meeting.",
            B: "Write a formal document and email it to the whole company.",
            C: "Collaborate with them immediately to clarify the acceptance criteria.",
            D: "Ask the Scrum Master to answer the question.",
          },
          answer: "C",
          rationale:
            "Agile emphasizes collaboration. The PO should be available to clarify details so the team is not blocked.",
        },
        {
          id: 3,
          question: "What is the primary purpose of the Product Backlog?",
          options: {
            A: "To track every hour the developers work.",
            B: "To serve as a fixed contract that cannot be changed.",
            C: "To be a dynamic list of everything that might be needed in the product.",
            D: "To record the minutes of the Daily Scrum.",
          },
          answer: "C",
          rationale:
            "The backlog is a living document. It contains all desired work but is constantly updated (refined) as new information is learned.",
        },
        {
          id: 4,
          question: '"Acceptance Criteria" are important because they:',
          options: {
            A: "Tell the developers exactly how to write the code (e.g., which variable names to use).",
            B: "Define the specific conditions that must be met for a user story to be considered complete.",
            C: "Allow the Scrum Master to punish the team if they fail.",
            D: "List the names of the stakeholders who requested the feature.",
          },
          answer: "B",
          rationale:
            'Acceptance criteria provide the "definition of done" for a specific item, ensuring everyone agrees on what the final output should look like.',
        },
        {
          id: 5,
          question:
            "If the Development Team says they cannot finish all the work selected for the Sprint, who decides which items to remove?",
          options: {
            A: "The Scrum Master.",
            B: "The Product Owner, in consultation with the Development Team.",
            C: "The CEO.",
            D: "No one; the team must work overtime to finish everything.",
          },
          answer: "B",
          rationale:
            "The Developers know how much they can do, but the Product Owner decides what is most important. They work together to adjust the scope while protecting the Sprint Goal.",
        },
      ],
    },
    {
      role: "Scrum Master",
      focus:
        "Servant leadership, coaching, removing impediments (Aligns with CSM)",
      flashcards: [
        {
          id: 6,
          question:
            "During the Daily Scrum (Stand-up), two developers start a long technical debate that is dragging the meeting out. What should you do?",
          options: {
            A: "Let them finish; it’s important they solve it now.",
            B: "Suggest they continue the discussion after the meeting so the rest of the team can get back to work.",
            C: "Tell them to stop talking and move on to the next person without solving the issue.",
            D: "Cancel the rest of the meeting.",
          },
          answer: "B",
          rationale:
            "The Daily Scrum is for synchronization, not deep problem solving. A Scrum Master ensures the meeting stays within the 15-minute timebox.",
        },
        {
          id: 7,
          question:
            "What is the main accountability of a Scrum Master regarding the team’s impediments (blockers)?",
          options: {
            A: "To write the code to fix the blocker.",
            B: "To complain to management about the team.",
            C: "To cause the removal of impediments that the team cannot resolve themselves.",
            D: "To ignore them and hope the team figures it out.",
          },
          answer: "C",
          rationale:
            "The Scrum Master is a servant-leader whose job is to clear the path for the team so they can focus on their work.",
        },
        {
          id: 8,
          question:
            "Who is responsible for hiring and firing members of the Scrum Team?",
          options: {
            A: "The Scrum Master.",
            B: "The Product Owner.",
            C: "The Scrum Team manages itself, but hiring/firing is typically an external management function, not a Scrum Master responsibility.",
            D: "The Senior Developer.",
          },
          answer: "C",
          rationale:
            "A Scrum Master is a coach, not a manager or boss. They do not typically have hiring/firing power.",
        },
        {
          id: 9,
          question:
            'A stakeholder walks into the team room and asks a developer to work on a "super urgent" task that is not in the Sprint Backlog. What should the Scrum Master do?',
          options: {
            A: "Tell the developer to stop their current work and do the urgent task.",
            B: "Intervene and explain that new requests must go through the Product Owner to protect the team's focus.",
            C: "Add the task to the Sprint Backlog immediately.",
            D: "Do the task themselves.",
          },
          answer: "B",
          rationale:
            "The Scrum Master protects the team from outside interference. All work should be prioritized by the Product Owner.",
        },
        {
          id: 10,
          question:
            "Which Scrum event is primarily designed for the team to inspect their own processes and improve how they work together?",
          options: {
            A: "Sprint Planning.",
            B: "Daily Scrum.",
            C: "Sprint Review.",
            D: "Sprint Retrospective.",
          },
          answer: "D",
          rationale:
            'The Retrospective is the "improvement meeting" where the team discusses what went well, what didn\'t, and how to work better next time.',
        },
      ],
    },
    {
      role: "UI/UX Designer",
      focus: "Accessibility, Responsiveness, Design Thinking (No code)",
      flashcards: [
        {
          id: 11,
          question:
            "When designing a form, why is it important to have high contrast between the text color and the background color?",
          options: {
            A: "It makes the design look more expensive.",
            B: "It ensures users with visual impairments can read the text easily.",
            C: "It allows the form to load faster.",
            D: "It helps the developers write better CSS.",
          },
          answer: "B",
          rationale:
            "Contrast is a key Accessibility (A11y) concept. If text doesn't stand out from the background, many people cannot read it.",
        },
        {
          id: 12,
          question: 'What does "Responsive Design" mean?',
          options: {
            A: "The website responds quickly when you click a button.",
            B: "The design automatically adjusts its layout to look good on phone, tablet, and desktop screens.",
            C: "The designer responds to emails within 24 hours.",
            D: "The colors change based on the time of day.",
          },
          answer: "B",
          rationale:
            "Responsive design ensures a usable experience across all device sizes, which is standard for modern web design.",
        },
        {
          id: 13,
          question:
            'You are designing a button. Why might you use a "Wireframe" before creating the final colorful version?',
          options: {
            A: "To figure out the layout and structure without getting distracted by colors and details.",
            B: "Because wireframes are cheaper to sell to clients.",
            C: "To test if the code works.",
            D: "To pick the best font family.",
          },
          answer: "A",
          rationale:
            'Wireframing is a low-fidelity step to validate the "skeleton" of the page and user flow before investing time in visual polish.',
        },
        {
          id: 14,
          question:
            "A user tells you, \"I can't find the 'Checkout' button.\" What is the best design solution?",
          options: {
            A: "Make the button bigger and use a more distinct color to improve visual hierarchy.",
            B: 'Add a pop-up that says "Click here to buy."',
            C: "Train the user on how to use the website.",
            D: "Leave it as is; they will find it eventually.",
          },
          answer: "A",
          rationale:
            "If a user can't find a primary action, it is a UI failure. Visual hierarchy (size, color, placement) guides the user's eye to the most important elements.",
        },
        {
          id: 15,
          question:
            'What is the purpose of "Alt Text" on images in your design specs?',
          options: {
            A: "To hide secret messages.",
            B: "To describe the image for users using screen readers (blind or low-vision users).",
            C: "To make the image file size smaller.",
            D: "To label the image for the marketing team.",
          },
          answer: "B",
          rationale:
            'Alt text is crucial for accessibility. It allows software to "read" the image to users who cannot see it.',
        },
      ],
    },
    {
      role: "Web Developer",
      focus: "Web fundamentals + Data Structures & Algorithms (DSA)",
      flashcards: [
        {
          id: 16,
          question:
            "You need to look up a customer's order using their unique Order ID. Which data structure would likely be the fastest for this lookup?",
          options: {
            A: "An Array (List)",
            B: "A Linked List",
            C: "A Hash Map (or Object/Dictionary)",
            D: "A Stack",
          },
          answer: "C",
          rationale:
            'A Hash Map allows for "Key-Value" lookups. Searching for a unique ID (Key) in a Hash Map is generally instantaneous (O(1) time complexity).',
        },
        {
          id: 17,
          question: "What is the difference between == and === in JavaScript?",
          options: {
            A: "They are exactly the same.",
            B: '== checks for equality but allows type conversion (e.g., "5" equals 5), while === checks for strict equality (type must match).',
            C: "=== is used for math, == is used for text.",
            D: "== is a typo; only === is valid.",
          },
          answer: "B",
          rationale:
            'This is a classic interview question. == performs type coercion (making it "loose"), whereas === is "strict" and safer to use to avoid bugs.',
        },
        {
          id: 18,
          question:
            "Which HTML tag is used to create the largest heading on a page?",
          options: {
            A: "<head>",
            B: "<h6>",
            C: "<h1>",
            D: "<header>",
          },
          answer: "C",
          rationale:
            "<h1> represents the main heading. <h6> is the smallest heading. <head> is for metadata, not visible text.",
        },
        {
          id: 19,
          question:
            "In an algorithm, if you have a loop inside another loop (nested loops) that both iterate through a list of size N, what is the Time Complexity?",
          options: {
            A: "O(1) - Constant Time",
            B: "O(N) - Linear Time",
            C: "O(N^2) - Quadratic Time",
            D: "O(log N) - Logarithmic Time",
          },
          answer: "C",
          rationale:
            "For every item in the first loop, you run the second loop N times. N * N = N^2. This is often considered slow for large datasets.",
        },
        {
          id: 20,
          question:
            "You want to center a div both horizontally and vertically using CSS Flexbox. Which properties do you need on the parent container?",
          options: {
            A: "display: block; text-align: center;",
            B: "display: flex; justify-content: center; align-items: center;",
            C: "float: center; margin: auto;",
            D: "position: absolute; left: 50%;",
          },
          answer: "B",
          rationale:
            "Flexbox is the modern standard for layout. justify-content handles the main axis (horizontal usually), and align-items handles the cross axis (vertical).",
        },
      ],
    },
    {
      role: "Python Developer",
      focus: "Python syntax + Data Structures & Algorithms (DSA)",
      flashcards: [
        {
          id: 21,
          question:
            'Which Python data structure is "immutable" (meaning it cannot be changed after it is created)?',
          options: {
            A: "List [1, 2]",
            B: "Dictionary {'a': 1}",
            C: "Tuple (1, 2)",
            D: "Set {1, 2}",
          },
          answer: "C",
          rationale:
            "Tuples are immutable lists. Once defined, you cannot add, remove, or change items. This makes them faster and safer for fixed data.",
        },
        {
          id: 22,
          question:
            "You have a list of 1,000 numbers and you need to sort them from smallest to largest. What is the average time complexity of Python's built-in sort() function?",
          options: {
            A: "O(N)",
            B: "O(N log N)",
            C: "O(N^2)",
            D: "O(1)",
          },
          answer: "B",
          rationale:
            'Python uses "Timsort," which is a very efficient sorting algorithm with an average complexity of O(N log N). This is much faster than O(N^2) bubble sort.',
        },
        {
          id: 23,
          question: "What does the keyword def do in Python?",
          options: {
            A: "It defines a variable.",
            B: "It defines a function.",
            C: "It deletes a file.",
            D: "It downloads a library.",
          },
          answer: "B",
          rationale:
            "def function_name(): is the syntax used to create a reusable block of code called a function.",
        },
        {
          id: 24,
          question:
            "You are writing a program to detect if a specific word exists in a large book. Which data structure is best to store the words of the book for fast searching?",
          options: {
            A: "A List",
            B: "A Set",
            C: "A Tuple",
            D: "A String",
          },
          answer: "B",
          rationale:
            "Checking if an item exists in a Set is very fast (O(1) on average) because it uses hashing. Checking a List requires looking at every item one by one (O(N)).",
        },
        {
          id: 25,
          question:
            'What is the purpose of a "Virtual Environment" (venv) in Python development?',
          options: {
            A: "To simulate a video game.",
            B: "To run Python on a different computer.",
            C: "To isolate the dependencies (libraries) for a specific project so they don't conflict with other projects.",
            D: "To make the code run faster.",
          },
          answer: "C",
          rationale:
            "Virtual environments are critical professional practice. They ensure that Project A can use version 1.0 of a library while Project B uses version 2.0 without breaking each other.",
        },
      ],
    },

    {
      role: "Frontend Developer",
      focus: "HTML, CSS, JavaScript, React, Accessibility",
      flashcards: [
        {
          id: 26,
          question: "Which HTML tag is best for wrapping a navigation menu?",
          options: {
            A: "<nav>",
            B: "<menu>",
            C: "<ul>",
            D: "<header>",
          },
          answer: "A",
          rationale:
            "<nav> is the semantic element specifically for navigation links.",
        },
        {
          id: 27,
          question: "What does JSX stand for in React?",
          options: {
            A: "JavaScript XML",
            B: "Java Syntax Extension",
            C: "JSON Xpress",
            D: "JavaScript Extra",
          },
          answer: "A",
          rationale: "JSX allows writing HTML-like syntax inside JavaScript.",
        },
        {
          id: 28,
          question: "Which CSS property controls text size?",
          options: {
            A: "font-style",
            B: "font-size",
            C: "text-weight",
            D: "line-height",
          },
          answer: "B",
          rationale: "font-size directly sets the size of text.",
        },
        {
          id: 29,
          question: "How do you improve accessibility for buttons?",
          options: {
            A: "Use <div> with onclick",
            B: "Use <button> with clear labels",
            C: "Hide text inside CSS",
            D: "Only use icons",
          },
          answer: "B",
          rationale:
            "Semantic <button> elements with descriptive labels improve accessibility.",
        },
        {
          id: 30,
          question: "Which React hook is used for managing state?",
          options: {
            A: "useEffect",
            B: "useState",
            C: "useContext",
            D: "useReducer",
          },
          answer: "B",
          rationale: "useState is the primary hook for local component state.",
        },
      ],
    },

    {
      role: "Backend Developer",
      focus: "APIs, Databases, Authentication, Server-side logic",
      flashcards: [
        {
          id: 31,
          question:
            "Which HTTP method is typically used to update existing data?",
          options: { A: "GET", B: "POST", C: "PUT", D: "DELETE" },
          answer: "C",
          rationale: "PUT is used for updating resources.",
        },
        {
          id: 32,
          question: "What does REST stand for?",
          options: {
            A: "Representational State Transfer",
            B: "Random Execution Standard",
            C: "Remote Server Technology",
            D: "Rapid Endpoint Service",
          },
          answer: "A",
          rationale: "REST is an architectural style for APIs.",
        },
        {
          id: 33,
          question: "Which database is NoSQL?",
          options: { A: "MySQL", B: "PostgreSQL", C: "MongoDB", D: "Oracle" },
          answer: "C",
          rationale: "MongoDB stores data in JSON-like documents.",
        },
        {
          id: 34,
          question: "What is JWT commonly used for?",
          options: {
            A: "Data encryption",
            B: "User authentication",
            C: "Database indexing",
            D: "File compression",
          },
          answer: "B",
          rationale: "JWT (JSON Web Token) is used for secure authentication.",
        },
        {
          id: 35,
          question:
            "Which language is most commonly used for backend with Node.js?",
          options: { A: "Python", B: "JavaScript", C: "Java", D: "C#" },
          answer: "B",
          rationale: "Node.js runs JavaScript on the server.",
        },
      ],
    },

    {
      role: "Fullstack Developer",
      focus: "Frontend + Backend integration, APIs, Deployment",
      flashcards: [
        {
          id: 36,
          question: "Which stack is commonly referred to as MERN?",
          options: {
            A: "MongoDB, Express, React, Node.js",
            B: "MySQL, Ember, Ruby, Nginx",
            C: "MongoDB, Electron, React, Next.js",
            D: "MariaDB, Express, Redux, Node.js",
          },
          answer: "A",
          rationale: "MERN is MongoDB, Express, React, Node.js.",
        },
        {
          id: 37,
          question: "What is the main advantage of GraphQL over REST?",
          options: {
            A: "Faster database queries",
            B: "Clients can request exactly the data they need",
            C: "It uses fewer servers",
            D: "It replaces SQL",
          },
          answer: "B",
          rationale:
            "GraphQL avoids over-fetching by allowing precise queries.",
        },
        {
          id: 38,
          question: "Which tool is commonly used for bundling frontend code?",
          options: { A: "Webpack", B: "Docker", C: "Postman", D: "Jenkins" },
          answer: "A",
          rationale: "Webpack bundles frontend assets.",
        },
        {
          id: 39,
          question: "Which HTTP method is used to delete a resource?",
          options: { A: "REMOVE", B: "DELETE", C: "DROP", D: "DESTROY" },
          answer: "B",
          rationale: "DELETE removes resources in REST APIs.",
        },
        {
          id: 40,
          question: "Which cloud provider offers Lambda functions?",
          options: { A: "AWS", B: "Azure", C: "Google Cloud", D: "Heroku" },
          answer: "A",
          rationale: "AWS Lambda provides serverless compute.",
        },
      ],
    },

    {
      role: "Data Scientist",
      focus: "Machine Learning, Statistics, Python, Data Visualization",
      flashcards: [
        {
          id: 41,
          question:
            "Which library is commonly used for data analysis in Python?",
          options: {
            A: "NumPy",
            B: "Pandas",
            C: "Matplotlib",
            D: "TensorFlow",
          },
          answer: "B",
          rationale: "Pandas provides DataFrame structures for analysis.",
        },
        {
          id: 42,
          question: "What does overfitting mean in machine learning?",
          options: {
            A: "Model performs well on training but poorly on new data",
            B: "Model is too simple",
            C: "Model ignores training data",
            D: "Model has no parameters",
          },
          answer: "A",
          rationale:
            "Overfitting means memorizing training data instead of generalizing.",
        },
        {
          id: 43,
          question: "Which visualization is best for categorical comparisons?",
          options: {
            A: "Line chart",
            B: "Bar chart",
            C: "Scatter plot",
            D: "Histogram",
          },
          answer: "B",
          rationale: "Bar charts compare categories effectively.",
        },
        {
          id: 44,
          question: "Which algorithm is used for classification?",
          options: {
            A: "K-Means",
            B: "Linear Regression",
            C: "Decision Tree",
            D: "PCA",
          },
          answer: "C",
          rationale: "Decision Trees classify data into categories.",
        },
        {
          id: 45,
          question: "Which metric evaluates classification accuracy?",
          options: { A: "RMSE", B: "Precision", C: "MAE", D: "R^2" },
          answer: "B",
          rationale: "Precision measures correct positive predictions.",
        },
      ],
    },
    {
      role: "DevOps Engineer",
      focus: "CI/CD, Infrastructure, Automation, Cloud",
      flashcards: [
        {
          id: 46,
          question: "Which tool is commonly used for containerization?",
          options: {
            A: "Docker",
            B: "Jenkins",
            C: "Terraform",
            D: "Kubernetes",
          },
          answer: "A",
          rationale: "Docker packages applications into containers.",
        },
        {
          id: 47,
          question: "What does CI/CD stand for?",
          options: {
            A: "Continuous Integration / Continuous Deployment",
            B: "Code Inspection / Code Delivery",
            C: "Cloud Infrastructure / Cloud Development",
            D: "Continuous Improvement / Continuous Debugging",
          },
          answer: "A",
          rationale: "CI/CD automates integration and deployment.",
        },
        {
          id: 48,
          question: "Which tool manages infrastructure as code?",
          options: { A: "Terraform", B: "GitHub", C: "Slack", D: "Postman" },
          answer: "A",
          rationale: "Terraform provisions infrastructure declaratively.",
        },
        {
          id: 49,
          question: "Which service orchestrates containers?",
          options: {
            A: "Docker",
            B: "Kubernetes",
            C: "Ansible",
            D: "CircleCI",
          },
          answer: "B",
          rationale:
            "Kubernetes manages and scales containerized applications.",
        },
        {
          id: 50,
          question:
            "What is the main benefit of using monitoring tools like Prometheus?",
          options: {
            A: "They automatically deploy code",
            B: "They track system performance and alert on issues",
            C: "They replace CI/CD pipelines",
            D: "They encrypt user data",
          },
          answer: "B",
          rationale:
            "Monitoring tools provide visibility into system health and performance.",
        },
      ],
    },

    {
      role: "Product Manager",
      focus: "Strategy, Roadmaps, Stakeholder Communication",
      flashcards: [
        {
          id: 51,
          question: "What is a product roadmap?",
          options: {
            A: "A list of bugs",
            B: "A timeline of planned product features and goals",
            C: "A marketing campaign",
            D: "A backlog of developer tasks",
          },
          answer: "B",
          rationale:
            "Roadmaps communicate product vision and planned features.",
        },
        {
          id: 52,
          question: "Which metric best measures product-market fit?",
          options: {
            A: "Churn rate",
            B: "Daily Active Users",
            C: "Code coverage",
            D: "Server uptime",
          },
          answer: "B",
          rationale: "High user engagement indicates product-market fit.",
        },
        {
          id: 53,
          question: "What is the primary role of a Product Manager?",
          options: {
            A: "Write all the code",
            B: "Define product vision and align stakeholders",
            C: "Test every feature",
            D: "Design UI mockups",
          },
          answer: "B",
          rationale:
            "PMs focus on vision, prioritization, and stakeholder alignment.",
        },
        {
          id: 54,
          question: "Which framework helps prioritize features?",
          options: { A: "MoSCoW", B: "Agile", C: "Scrum", D: "Kanban" },
          answer: "A",
          rationale:
            "MoSCoW categorizes features into Must, Should, Could, Won’t.",
        },
        {
          id: 55,
          question: "What is MVP in product development?",
          options: {
            A: "Most Valuable Player",
            B: "Minimum Viable Product",
            C: "Maximum Value Proposition",
            D: "Managed Versioning Process",
          },
          answer: "B",
          rationale:
            "MVP is the simplest version of a product that delivers value.",
        },
      ],
    },

    {
      role: "UX/UI Designer",
      focus: "User Experience, Visual Design, Accessibility",
      flashcards: [
        {
          id: 56,
          question: "What is a persona in UX design?",
          options: {
            A: "A fictional character representing a user type",
            B: "A CSS framework",
            C: "A database schema",
            D: "A UI component library",
          },
          answer: "A",
          rationale: "Personas help designers empathize with user needs.",
        },
        {
          id: 57,
          question: "Which principle improves usability?",
          options: {
            A: "Consistency",
            B: "Randomness",
            C: "Complexity",
            D: "Ambiguity",
          },
          answer: "A",
          rationale: "Consistency ensures predictable user experiences.",
        },
        {
          id: 58,
          question: "What is a wireframe?",
          options: {
            A: "A low-fidelity layout of a design",
            B: "A final polished UI",
            C: "A database diagram",
            D: "A CSS grid system",
          },
          answer: "A",
          rationale: "Wireframes outline structure before visual polish.",
        },
        {
          id: 59,
          question: "Which tool is commonly used for UI design?",
          options: { A: "Figma", B: "Docker", C: "Jenkins", D: "MongoDB" },
          answer: "A",
          rationale: "Figma is widely used for collaborative UI design.",
        },
        {
          id: 60,
          question: "What does 'A/B testing' mean?",
          options: {
            A: "Testing two versions of a design to see which performs better",
            B: "Testing accessibility compliance",
            C: "Testing backend APIs",
            D: "Testing browser compatibility",
          },
          answer: "A",
          rationale:
            "A/B testing compares user responses to two design variants.",
        },
      ],
    },

    {
      role: "QA Engineer",
      focus: "Testing, Automation, Quality Assurance",
      flashcards: [
        {
          id: 61,
          question: "What is the purpose of regression testing?",
          options: {
            A: "To test new features only",
            B: "To ensure existing functionality still works after changes",
            C: "To test performance under load",
            D: "To test UI design",
          },
          answer: "B",
          rationale: "Regression testing prevents old features from breaking.",
        },
        {
          id: 62,
          question: "Which tool is commonly used for automated UI testing?",
          options: { A: "Selenium", B: "Docker", C: "Terraform", D: "Git" },
          answer: "A",
          rationale: "Selenium automates browser testing.",
        },
        {
          id: 63,
          question: "What is a test case?",
          options: {
            A: "A bug report",
            B: "A set of conditions to validate functionality",
            C: "A database entry",
            D: "A CI/CD pipeline",
          },
          answer: "B",
          rationale: "Test cases define inputs, actions, and expected results.",
        },
        {
          id: 64,
          question: "What is load testing?",
          options: {
            A: "Testing how the system performs under heavy usage",
            B: "Testing UI responsiveness",
            C: "Testing database schema",
            D: "Testing accessibility",
          },
          answer: "A",
          rationale: "Load testing evaluates performance under stress.",
        },
        {
          id: 65,
          question:
            "Which type of testing ensures the system meets business needs?",
          options: {
            A: "Unit Testing",
            B: "Integration Testing",
            C: "Acceptance Testing",
            D: "Smoke Testing",
          },
          answer: "C",
          rationale:
            "Acceptance testing validates requirements from a business perspective.",
        },
      ],
    },

    {
      role: "Mobile Developer",
      focus: "iOS, Android, Cross-platform frameworks",
      flashcards: [
        {
          id: 66,
          question: "Which language is primarily used for Android development?",
          options: {
            A: "Swift",
            B: "Kotlin",
            C: "Objective-C",
            D: "JavaScript",
          },
          answer: "B",
          rationale: "Kotlin is the modern language for Android apps.",
        },
        {
          id: 67,
          question: "Which framework allows cross-platform mobile development?",
          options: {
            A: "React Native",
            B: "Spring Boot",
            C: "Django",
            D: "Angular",
          },
          answer: "A",
          rationale: "React Native builds apps for iOS and Android.",
        },
        {
          id: 68,
          question: "Which file defines app permissions in Android?",
          options: {
            A: "index.html",
            B: "AndroidManifest.xml",
            C: "package.json",
            D: "config.yml",
          },
          answer: "B",
          rationale: "AndroidManifest.xml declares app permissions.",
        },
        {
          id: 69,
          question: "Which tool is used to publish iOS apps?",
          options: {
            A: "Google Play Console",
            B: "Xcode",
            C: "App Store Connect",
            D: "Firebase",
          },
          answer: "C",
          rationale: "App Store Connect manages iOS app publishing.",
        },
        {
          id: 70,
          question: "Which database is commonly used for local mobile storage?",
          options: { A: "SQLite", B: "MongoDB", C: "PostgreSQL", D: "Redis" },
          answer: "A",
          rationale:
            "SQLite is lightweight and embedded, ideal for mobile local storage.",
        },
      ],
    },

    {
      role: "Systems Analyst",
      focus: "Requirements gathering, System design, Business-IT alignment",
      flashcards: [
        {
          id: 71,
          question: "What is the primary role of a Systems Analyst?",
          options: {
            A: "Write all the code",
            B: "Bridge business needs with technical solutions",
            C: "Design marketing campaigns",
            D: "Manage cloud infrastructure",
          },
          answer: "B",
          rationale:
            "Systems Analysts translate business requirements into system specifications.",
        },
        {
          id: 72,
          question:
            "Which document captures functional and non-functional requirements?",
          options: {
            A: "System Requirements Specification",
            B: "User Manual",
            C: "Test Plan",
            D: "Wireframe",
          },
          answer: "A",
          rationale:
            "SRS documents define system requirements comprehensively.",
        },
        {
          id: 73,
          question: "Which diagram shows data flow between processes?",
          options: {
            A: "Entity Relationship Diagram",
            B: "Data Flow Diagram",
            C: "Class Diagram",
            D: "Sequence Diagram",
          },
          answer: "B",
          rationale: "DFDs illustrate how data moves through a system.",
        },
        {
          id: 74,
          question:
            "Which technique helps gather requirements from stakeholders?",
          options: {
            A: "Brainstorming",
            B: "Coding",
            C: "Debugging",
            D: "Unit Testing",
          },
          answer: "A",
          rationale:
            "Brainstorming sessions uncover stakeholder needs and ideas.",
        },
        {
          id: 75,
          question:
            "Which methodology emphasizes iterative development and stakeholder feedback?",
          options: { A: "Waterfall", B: "Agile", C: "V-Model", D: "Spiral" },
          answer: "B",
          rationale:
            "Agile focuses on iterative cycles and continuous stakeholder collaboration.",
        },
      ],
    },
  ],
];

export default QUESTIONS_DATA;
