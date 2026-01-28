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

        {
          id: 6,
          question:
            "A key stakeholder insists on adding a new feature in the middle of an active Sprint. What should you do?",
          options: {
            A: "Tell the developers to stop their current work and start the new feature.",
            B: "Add it to the Product Backlog and discuss it during the next Sprint Planning.",
            C: "Ask the Scrum Master to decide if the feature is important.",
            D: "Cancel the Sprint immediately.",
          },
          answer: "B",
          rationale:
            "Sprints are protected from outside changes to maintain focus. New ideas go to the Product Backlog for future prioritization.",
        },
        {
          id: 7,
          question:
            "Who has the final say on the order of items in the Product Backlog?",
          options: {
            A: "The Scrum Master.",
            B: "The CEO or Project Sponsor.",
            C: "The Product Owner.",
            D: "The Developers.",
          },
          answer: "C",
          rationale:
            "While the PO listens to everyone, they are the sole person responsible for the Product Backlog and its ordering.",
        },
        {
          id: 8,
          question:
            "What does it mean for a Product Backlog item to be 'Ready'?",
          options: {
            A: "It has been coded and tested.",
            B: "It is clear and small enough to be completed by the team in one Sprint.",
            C: "The stakeholder has signed a physical contract for it.",
            D: "It has been in the backlog for at least two weeks.",
          },
          answer: "B",
          rationale:
            "'Ready' items are refined so that the team can pull them into a Sprint without major confusion or blockers.",
        },
        {
          id: 9,
          question:
            "During the Sprint Review, the Product Owner's primary role is to:",
          options: {
            A: "Tell the team why they didn't work fast enough.",
            B: "Demonstrate the 'Done' increment and gather feedback from stakeholders.",
            C: "Assign tasks for the next Sprint.",
            D: "Keep the minutes of the meeting.",
          },
          answer: "B",
          rationale:
            "The Review is about transparency and collaboration with stakeholders to decide what to do next based on what was built.",
        },
        {
          id: 10,
          question:
            "How should a Product Owner measure the success of a product?",
          options: {
            A: "By how many lines of code were written.",
            B: "By the number of hours the team worked.",
            C: "By the value delivered to users and business outcomes achieved.",
            D: "By how closely the team followed the original project plan.",
          },
          answer: "C",
          rationale:
            "Agile success is measured by value and working software, not by volume of work or adherence to a static plan.",
        },
        {
          id: 11,
          question:
            "The Product Owner can best assist the team during the Daily Scrum by:",
          options: {
            A: "Directing each developer on what to do that day.",
            B: "Remaining silent and listening to understand progress and potential blockers.",
            C: "Updating the project schedule on a screen.",
            D: "Telling the team they need to work harder.",
          },
          answer: "B",
          rationale:
            "The Daily Scrum is for the Developers. The PO attends to stay informed but does not manage the meeting or assign tasks.",
        },
        {
          id: 12,
          question:
            "What is the relationship between the Product Goal and the Product Backlog?",
          options: {
            A: "The Product Goal is a separate document kept by the CEO.",
            B: "The Product Backlog emerges to fulfill the Product Goal.",
            C: "There is no relationship.",
            D: "The Product Goal is only defined once the Backlog is empty.",
          },
          answer: "B",
          rationale:
            "The Product Goal is the long-term objective. The Backlog contains the work required to reach that goal.",
        },
        {
          id: 13,
          question:
            "If a Product Owner is overwhelmed, they can delegate some of their responsibilities to the Developers. However, who remains accountable?",
          options: {
            A: "The person who did the work.",
            B: "The Scrum Master.",
            C: "The Product Owner.",
            D: "The Functional Manager.",
          },
          answer: "C",
          rationale:
            "Accountability cannot be delegated. The PO can have others do the work, but they are still responsible for the outcome.",
        },
        {
          id: 14,
          question: "Backlog Refinement is an activity used to:",
          options: {
            A: "Fix bugs in the current Sprint.",
            B: "Add detail, estimates, and order to items in the Product Backlog.",
            C: "Fire team members who are underperforming.",
            D: "Calculate the team's bonus.",
          },
          answer: "B",
          rationale:
            "Refinement is an ongoing process to ensure the backlog is healthy and ready for future Sprints.",
        },
        {
          id: 15,
          question: "When can the Product Owner cancel a Sprint?",
          options: {
            A: "Any time they feel like it.",
            B: "If the Sprint Goal becomes obsolete.",
            C: "Only if the Scrum Master gives permission.",
            D: "If a developer is sick.",
          },
          answer: "B",
          rationale:
            "Only the PO has the authority to cancel a Sprint, and it should only happen if the Goal no longer makes sense for the business.",
        },
        {
          id: 16,
          question:
            "Which of the following is NOT a responsibility of the Product Owner?",
          options: {
            A: "Developing and explicitly communicating the Product Goal.",
            B: "Managing the Developers' daily task assignments.",
            C: "Ordering Product Backlog items.",
            D: "Ensuring the Product Backlog is transparent and understood.",
          },
          answer: "B",
          rationale:
            "Developers are self-managing; they decide how to do the work and who does what.",
        },
        {
          id: 17,
          question: "A 'User Story' is primarily a tool for:",
          options: {
            A: "Legal documentation.",
            B: "Creating a conversation between the PO and the Team.",
            C: "Micromanaging the developers.",
            D: "Tracking hardware costs.",
          },
          answer: "B",
          rationale:
            "User stories are placeholders for conversation. They help the team understand the user's need rather than just following a technical spec.",
        },
        {
          id: 18,
          question: "The 'Value' of a Product Backlog item is determined by:",
          options: {
            A: "How many hours it takes to build.",
            B: "The Product Owner's judgment based on business and customer needs.",
            C: "The number of lines of code.",
            D: "The complexity of the algorithm.",
          },
          answer: "B",
          rationale:
            "Value is subjective and business-oriented. The PO determines what is most valuable to the stakeholders and users.",
        },
        {
          id: 19,
          question:
            "What should a Product Owner do if they don't know the answer to a technical question about the product?",
          options: {
            A: "Make up an answer to stay in control.",
            B: "Consult with the Developers to understand the technical constraints.",
            C: "Tell the Developers it's not their job to ask questions.",
            D: "Guess and hope for the best.",
          },
          answer: "B",
          rationale:
            "The PO should collaborate with the technical experts (the Developers) to make informed decisions.",
        },
        {
          id: 20,
          question:
            "In the first Sprint, what is the Product Owner's main priority?",
          options: {
            A: "Setting up the office furniture.",
            B: "Ensuring the team delivers a usable 'Done' increment that meets the Sprint Goal.",
            C: "Writing a 100-page requirement document.",
            D: "Choosing a team name.",
          },
          answer: "B",
          rationale:
            "The goal of every Sprint, including the first, is to produce a functional increment of value.",
        },
        {
          id: 21,
          question:
            "Which of the following best describes the Product Owner's relationship with stakeholders?",
          options: {
            A: "The PO should ignore stakeholders to focus on the team.",
            B: "The PO acts as a bridge, balancing stakeholder needs with product value.",
            C: "The PO does whatever the most powerful stakeholder says.",
            D: "The PO lets stakeholders talk directly to developers all day.",
          },
          answer: "B",
          rationale:
            "The PO manages expectations and synthesizes feedback from many sources into a single vision.",
        },
        {
          id: 22,
          question:
            "What is 'Technical Debt' from a Product Owner's perspective?",
          options: {
            A: "A bank loan taken out for servers.",
            B: "Shortcuts taken in code that will make future changes harder and more expensive.",
            C: "The cost of buying new laptops for the team.",
            D: "A myth made up by developers.",
          },
          answer: "B",
          rationale:
            "Technical debt slows down the product's long-term agility. The PO must balance new features with the need to pay down this debt.",
        },
        {
          id: 23,
          question: "How often should the Product Backlog be changed?",
          options: {
            A: "Only once a year.",
            B: "Never after the project starts.",
            C: "As often as needed to reflect new learning and market changes.",
            D: "Every hour.",
          },
          answer: "C",
          rationale:
            "Agile is about responding to change. The backlog is dynamic and updated as the environment evolves.",
        },
        {
          id: 24,
          question: "The 'Definition of Done' (DoD) is used to:",
          options: {
            A: "Help the PO know when a story is ready to be tested.",
            B: "Create a shared understanding of what quality looks like for every increment.",
            C: "Track the team's lunch breaks.",
            D: "List all the features that will never be built.",
          },
          answer: "B",
          rationale:
            "The DoD ensures that when the team says something is 'done,' it meets the required quality standards for release.",
        },
        {
          id: 25,
          question:
            "Why is it important for the Product Owner to participate in the Sprint Retrospective?",
          options: {
            A: "To tell the team who to fire.",
            B: "To share how the product vision can be better supported by the team's processes.",
            C: "To argue about the estimates.",
            D: "They shouldn't; the Retrospective is only for Developers.",
          },
          answer: "B",
          rationale:
            "The PO is part of the Scrum Team. They participate to help improve the team's overall effectiveness and collaboration.",
        },
        {
          id: 26,
          question: "A Product Owner who acts as a 'Scribe' is one who:",
          options: {
            A: "Makes all the decisions independently.",
            B: "Only writes down what others tell them without adding value or vision.",
            C: "Is an expert at coding.",
            D: "Does not attend any meetings.",
          },
          answer: "B",
          rationale:
            "A 'Scribe' PO lacks authority. An effective PO must be an 'Owner' who makes decisions and takes accountability.",
        },
        {
          id: 27,
          question:
            "What happens if a Product Backlog item does not meet the Definition of Done by the end of the Sprint?",
          options: {
            A: "It is partially demoed at the Review.",
            B: "It is moved to the next Sprint automatically.",
            C: "It is returned to the Product Backlog and not included in the Increment.",
            D: "The Sprint is extended by two days.",
          },
          answer: "C",
          rationale:
            "Incomplete items are not shown in the Review. This maintains transparency about what is actually usable.",
        },
        {
          id: 28,
          question:
            "The Product Owner should spend the majority of their time:",
          options: {
            A: "At their desk writing code.",
            B: "Talking to customers, stakeholders, and the team to refine value.",
            C: "In the breakroom.",
            D: "In HR meetings.",
          },
          answer: "B",
          rationale:
            "The PO is a communicator and a strategist. They need to be out 'in the world' gathering insights.",
        },
        {
          id: 29,
          question:
            "If multiple Scrum Teams are working on the same product, they must have:",
          options: {
            A: "Multiple Product Owners.",
            B: "Multiple Product Backlogs.",
            C: "One Product Owner and one Product Backlog.",
            D: "No Product Owner.",
          },
          answer: "C",
          rationale:
            "To maintain a single vision and avoid conflicting priorities, one product should have one backlog and one PO.",
        },
        {
          id: 30,
          question: "What is the Product Owner's role in 'Estimation'?",
          options: {
            A: "They tell the team how long a task should take.",
            B: "They provide clarity on the items being estimated but do not provide the estimate itself.",
            C: "They double the team's estimate to be safe.",
            D: "They don't participate in estimation at all.",
          },
          answer: "B",
          rationale:
            "Only the Developers who do the work can provide the estimate. The PO explains the 'what' so the team can estimate the 'how much.'",
        },
        {
          id: 31,
          question: "The 'Minimum Viable Product' (MVP) is best described as:",
          options: {
            A: "The cheapest possible version of a product.",
            B: "A version of a new product which allows a team to collect the maximum amount of validated learning with the least effort.",
            C: "A product with no bugs.",
            D: "The first 10 items in the backlog.",
          },
          answer: "B",
          rationale:
            "An MVP is about learning. It helps the PO test hypotheses about the market with minimal investment.",
        },
        {
          id: 32,
          question:
            "Which document describes the incremental progress toward the Product Goal?",
          options: {
            A: "The Gantt Chart.",
            B: "The Product Backlog.",
            C: "The Burn-up Chart.",
            D: "The Employee Handbook.",
          },
          answer: "B",
          rationale:
            "The Product Backlog is the single source of truth for what is planned and what remains to be done for the product.",
        },
        {
          id: 33,
          question:
            "A PO notices the team is consistently missing their Sprint Goals. The best response is to:",
          options: {
            A: "Blame the Scrum Master.",
            B: "Collaborate with the team in the Retrospective to identify the root cause.",
            C: "Increase the number of items in the next Sprint.",
            D: "Hire a new team.",
          },
          answer: "B",
          rationale:
            "Scrum is about continuous improvement. The PO should work with the team to find and fix the problem.",
        },
        {
          id: 34,
          question:
            "What is the outcome of a Sprint Planning meeting for the Product Owner?",
          options: {
            A: "A list of people to blame if the Sprint fails.",
            B: "The Sprint Goal and an understanding of how the items support that goal.",
            C: "A detailed project plan for the next six months.",
            D: "A finalized budget.",
          },
          answer: "B",
          rationale:
            "The PO ensures the team understands why the Sprint is valuable (the Goal) and what needs to be done.",
        },
        {
          id: 35,
          question: "When should the Product Owner refine the backlog?",
          options: {
            A: "Only on the last day of the Sprint.",
            B: "Continuously throughout the project.",
            C: "Only if the Developers ask.",
            D: "Never.",
          },
          answer: "B",
          rationale:
            "Refinement is an ongoing activity. As the PO learns more, the backlog should be updated to reflect that knowledge.",
        },
        {
          id: 36,
          question: "Transparency in Scrum means that:",
          options: {
            A: "Everyone can see the code.",
            B: "The Product Backlog and progress are visible and understood by those performing the work and those receiving it.",
            C: "The office has glass walls.",
            D: "The PO tells everyone their salary.",
          },
          answer: "B",
          rationale:
            "Transparency ensures that stakeholders and the team are aligned on the true state of the project.",
        },
        {
          id: 37,
          question:
            "The 'Empirical' nature of Scrum means decisions should be based on:",
          options: {
            A: "What the PO thinks might happen.",
            B: "Observation and experience (what has actually happened).",
            C: "Ancient project management textbooks.",
            D: "Guesses.",
          },
          answer: "B",
          rationale:
            "Scrum relies on inspection, adaptation, and transparency based on real-world results.",
        },
        {
          id: 38,
          question:
            "If a stakeholder asks for a progress report, the PO should:",
          options: {
            A: "Tell them to go away.",
            B: "Show them the Product Backlog and current Increment status.",
            C: "Create a 50-slide PowerPoint.",
            D: "Ask the Developers to stop working and write a report.",
          },
          answer: "B",
          rationale:
            "The Product Backlog and the Increment are the primary tools for showing progress in Scrum.",
        },
        {
          id: 39,
          question: "A Product Owner should be 'Empowered.' This means:",
          options: {
            A: "They can fire anyone.",
            B: "Their decisions must be respected by the entire organization.",
            C: "They have a fancy title.",
            D: "They can work from home every day.",
          },
          answer: "B",
          rationale:
            "Without authority to make decisions about the product, a PO cannot effectively maximize value.",
        },
        {
          id: 40,
          question:
            "Which of the following best describes the Product Owner role?",
          options: {
            A: "A Project Manager who uses sticky notes.",
            B: "A visionary responsible for maximizing the value of the product.",
            C: "The boss of the Scrum Team.",
            D: "A technical lead.",
          },
          answer: "B",
          rationale:
            "The PO is a value-maximizer. They define the 'Why' and the 'What' to ensure the product succeeds.",
        },
      ],
    },
    {
      role: "Scrum Master",
      focus:
        "Servant leadership, coaching, removing impediments (Aligns with CSM)",
      flashcards: [
        {
          id: 41,
          question:
            "A team is transitioning to Scrum and is struggling to manage themselves. What is the Scrum Master's role here?",
          options: {
            A: "Assign daily tasks to ensure the work gets done.",
            B: "Coach the team in self-management and cross-functionality.",
            C: "Tell the Product Owner to pick a team lead.",
            D: "Do the work for the team until they learn.",
          },
          answer: "B",
          rationale:
            "The Scrum Master is a coach who helps the team become self-managing, rather than directing their work for them.",
        },
        {
          id: 42,
          question:
            "Who is responsible for facilitating the Scrum events if the team requests help?",
          options: {
            A: "The Project Manager.",
            B: "The Product Owner.",
            C: "The Scrum Master.",
            D: "The Lead Developer.",
          },
          answer: "C",
          rationale:
            "Facilitation is a key service the Scrum Master provides to ensure meetings are productive and stay within timeboxes.",
        },
        {
          id: 43,
          question: "The Scrum Master helps the Product Owner by:",
          options: {
            A: "Writing all the user stories for them.",
            B: "Finding techniques for effective Product Goal definition and backlog management.",
            C: "Taking over stakeholder meetings.",
            D: "Dictating the order of the backlog.",
          },
          answer: "B",
          rationale:
            "The SM serves the PO by providing tools and methods to manage the product value effectively.",
        },
        {
          id: 44,
          question:
            "During a Sprint Retrospective, the team is afraid to speak up about problems. What should the Scrum Master do?",
          options: {
            A: "Cancel the meeting and move on.",
            B: "Create a safe environment and use facilitation techniques to encourage honest feedback.",
            C: "Report the team to their functional managers.",
            D: "Speak for them and list the problems themselves.",
          },
          answer: "B",
          rationale:
            "Psychological safety is essential for growth. The SM must facilitate a space where transparency is possible.",
        },
        {
          id: 45,
          question:
            "If a team decides to skip the Daily Scrum because 'we all sit next to each other anyway,' how should the SM respond?",
          options: {
            A: "Agree, as it saves 15 minutes of time.",
            B: "Coach the team on the purpose of the event: to inspect progress toward the Sprint Goal and adapt the plan.",
            C: "Force them to attend by threatening to withhold pay.",
            D: "Ask the Product Owner to command them to attend.",
          },
          answer: "B",
          rationale:
            "Sitting together doesn't guarantee the focused inspection and adaptation required by the Daily Scrum.",
        },
        {
          id: 46,
          question: "What is the Scrum Master's role during the Sprint Review?",
          options: {
            A: "To demonstrate the software to the stakeholders.",
            B: "To ensure the event takes place and that attendees understand its purpose.",
            C: "To act as the master of ceremonies and give a speech.",
            D: "To grade the team's performance.",
          },
          answer: "B",
          rationale:
            "The SM ensures the event is productive and kept within the timebox, while the PO and Developers focus on the content.",
        },
        {
          id: 47,
          question:
            "An organization wants to use Scrum but keeps the 'Project Manager' role. How should the Scrum Master handle this?",
          options: {
            A: "Ignore the Project Manager completely.",
            B: "Work with the organization to understand how Scrum roles fulfill the needs previously met by PMs.",
            C: "Quit the job immediately.",
            D: "Ask the PM to run the Daily Scrum.",
          },
          answer: "B",
          rationale:
            "A Scrum Master serves the organization by leading and coaching it in its Scrum adoption.",
        },
        {
          id: 48,
          question: "Who determines how many items are selected for a Sprint?",
          options: {
            A: "The Scrum Master.",
            B: "The Product Owner.",
            C: "The Developers.",
            D: "The Stakeholders.",
          },
          answer: "C",
          rationale:
            "Only the Developers can assess what they can accomplish over the upcoming Sprint based on their capacity.",
        },
        {
          id: 49,
          question: "What does 'Servant Leadership' mean for a Scrum Master?",
          options: {
            A: "The SM is the team's assistant who gets them coffee.",
            B: "The SM leads by serving the needs of the team, the PO, and the organization.",
            C: "The SM has no authority at all.",
            D: "The SM does whatever the team tells them to do.",
          },
          answer: "B",
          rationale:
            "The SM leads through coaching, clearing obstacles, and fostering an environment for success, rather than through command and control.",
        },
        {
          id: 50,
          question:
            "Which of the following is an example of an impediment a Scrum Master should help remove?",
          options: {
            A: "A developer wanting to use a different IDE.",
            B: "A broken build server that is blocking the entire team.",
            C: "The team deciding what to have for lunch.",
            D: "A minor typo in a user story.",
          },
          answer: "B",
          rationale:
            "Impediments are issues that block the team's progress toward the Sprint Goal that the team cannot solve alone.",
        },
        {
          id: 51,
          question: "How does the Scrum Master help the organization?",
          options: {
            A: "By increasing the pressure on the developers.",
            B: "By removing barriers between stakeholders and Scrum Teams.",
            C: "By acting as a spy for the CEO.",
            D: "By ensuring no one takes vacations.",
          },
          answer: "B",
          rationale:
            "One of the SM's duties is to help stakeholders and the organization understand and interact effectively with the Scrum Team.",
        },
        {
          id: 52,
          question:
            "If the Developers are arguing about which technology to use, what should the Scrum Master do?",
          options: {
            A: "Pick the technology for them to save time.",
            B: "Facilitate a discussion or experiment (spike) so the team can reach a consensus.",
            C: "Ask the Product Owner to choose.",
            D: "Tell them technology doesn't matter.",
          },
          answer: "B",
          rationale:
            "The SM helps the team improve their self-management and decision-making skills.",
        },
        {
          id: 53,
          question: "In a Scrum Team, the Scrum Master is:",
          options: {
            A: "A peer on the team.",
            B: "The manager of the team.",
            C: "An optional role.",
            D: "External to the team.",
          },
          answer: "A",
          rationale:
            "The Scrum Master is a full member of the Scrum Team, sharing in the collective responsibility for the product's success.",
        },
        {
          id: 54,
          question: "When is a Sprint over?",
          options: {
            A: "When all the work is done.",
            B: "When the Product Owner says so.",
            C: "When the timebox expires.",
            D: "When the code is deployed.",
          },
          answer: "C",
          rationale:
            "Sprints are fixed-length timeboxes. They end exactly when the calendar time runs out, regardless of work status.",
        },
        {
          id: 55,
          question: "The Scrum Master's role in the Sprint Planning is to:",
          options: {
            A: "Define the Sprint Goal.",
            B: "Ensure the team understands the timebox and the goal of the meeting.",
            C: "Assign stories to individuals.",
            D: "Determine the team's velocity.",
          },
          answer: "B",
          rationale:
            "The SM facilitates to ensure the event is effective and that everyone understands the Scrum framework.",
        },
        {
          id: 56,
          question: "Who must attend the Daily Scrum?",
          options: {
            A: "The Product Owner, Scrum Master, and Developers.",
            B: "The Developers only.",
            C: "The Stakeholders.",
            D: "The entire organization.",
          },
          answer: "B",
          rationale:
            "The Daily Scrum is for the Developers to manage their own progress. The SM and PO are not required, though they may attend.",
        },
        {
          id: 57,
          question:
            "How can a Scrum Master improve a team's 'Definition of Done'?",
          options: {
            A: "By writing a new list and forcing the team to follow it.",
            B: "By coaching the team to include higher quality standards during the Retrospective.",
            C: "By ignoring it.",
            D: "By letting the QA lead handle it.",
          },
          answer: "B",
          rationale:
            "Continuous improvement includes raising the bar for quality in the Definition of Done.",
        },
        {
          id: 58,
          question:
            "A Product Owner is constantly changing the Sprint Goal during the Sprint. What should the SM do?",
          options: {
            A: "Nothing; the PO is the boss of the product.",
            B: "Coach the PO on why the Sprint Goal should remain stable to protect the team's focus.",
            C: "Ask the team to work faster.",
            D: "Fire the Product Owner.",
          },
          answer: "B",
          rationale:
            "The SM protects the Scrum process. A stable Sprint Goal is necessary for the team to achieve a 'Done' increment.",
        },
        {
          id: 59,
          question:
            "What does a Scrum Master do if the team has no Sprint Goal at the end of Planning?",
          options: {
            A: "Start the Sprint anyway.",
            B: "Coach the team on the importance of the Goal as a focal point and help them create one.",
            C: "Write a goal for them.",
            D: "Report them to the Product Owner.",
          },
          answer: "B",
          rationale:
            "The Sprint Goal is a mandatory part of Scrum; it provides the 'why' for the work.",
        },
        {
          id: 60,
          question: "Which of the following is NOT a pillar of Scrum?",
          options: {
            A: "Transparency.",
            B: "Inspection.",
            C: "Adaptation.",
            D: "Documentation.",
          },
          answer: "D",
          rationale:
            "The three pillars of Empiricism are Transparency, Inspection, and Adaptation.",
        },
        {
          id: 61,
          question:
            "The Scrum Master is responsible for the ______ of the Scrum Team.",
          options: {
            A: "Performance reviews.",
            B: "Effectiveness.",
            C: "Daily coffee.",
            D: "Coding standards.",
          },
          answer: "B",
          rationale:
            "The SM is accountable for the team's effectiveness by helping them improve their practices within the Scrum framework.",
        },
        {
          id: 62,
          question:
            "If the team is consistently over-committing and failing to finish work, the SM should:",
          options: {
            A: "Tell them they are lazy.",
            B: "Facilitate a discussion about capacity and historical velocity during Planning.",
            C: "Ask them to stay late every night.",
            D: "Remove the slowest developer.",
          },
          answer: "B",
          rationale:
            "The SM helps the team use empirical data to make more realistic commitments.",
        },
        {
          id: 63,
          question:
            "What is the maximum timebox for a Sprint Retrospective (for a 1-month Sprint)?",
          options: {
            A: "15 minutes.",
            B: "1 hour.",
            C: "3 hours.",
            D: "8 hours.",
          },
          answer: "C",
          rationale:
            "The Retrospective is timeboxed to a maximum of 3 hours for a one-month Sprint.",
        },
        {
          id: 64,
          question: "In Scrum, who is responsible for the 'how' of the work?",
          options: {
            A: "The Product Owner.",
            B: "The Scrum Master.",
            C: "The Developers.",
            D: "The Architect.",
          },
          answer: "C",
          rationale:
            "The Developers are self-managing and decide the technical approach and implementation.",
        },
        {
          id: 65,
          question:
            "If a team member is toxic and causing conflict, the Scrum Master should first:",
          options: {
            A: "Fire them immediately.",
            B: "Coach the team to resolve the conflict internally, or work with the individual to improve behavior.",
            C: "Tell the Product Owner to handle it.",
            D: "Ignore it and hope it goes away.",
          },
          answer: "B",
          rationale:
            "The SM is a coach. They help the team resolve interpersonal issues while promoting Scrum values like Respect and Courage.",
        },
        {
          id: 66,
          question:
            "True or False: The Scrum Master acts as a shield for the team.",
          options: {
            A: "True.",
            B: "False.",
          },
          answer: "A",
          rationale:
            "The SM protects the team from external interruptions and 'scope creep' that hasn't been prioritized by the PO.",
        },
        {
          id: 67,
          question:
            "What should the Scrum Master do during the Sprint if they notice the team is struggling with a technical skill?",
          options: {
            A: "Assign them training.",
            B: "Coach the team on the importance of cross-functionality and help them find resources to learn.",
            C: "Do the technical work for them.",
            D: "Tell them to figure it out on their own time.",
          },
          answer: "B",
          rationale:
            "The SM helps the team grow their capabilities to become a more effective, cross-functional unit.",
        },
        {
          id: 68,
          question: "How many Scrum Masters can one team have?",
          options: {
            A: "As many as they want.",
            B: "Exactly one.",
            C: "Zero.",
            D: "One for every two developers.",
          },
          answer: "B",
          rationale:
            "The Scrum framework specifies one Scrum Master per Scrum Team to ensure clear accountability.",
        },
        {
          id: 69,
          question:
            "Which Scrum Value is displayed when a team member admits they are stuck and needs help?",
          options: {
            A: "Openness.",
            B: "Commitment.",
            C: "Focus.",
            D: "Compliance.",
          },
          answer: "A",
          rationale:
            "Openness involves being transparent about work, challenges, and roadblocks.",
        },
        {
          id: 70,
          question: "The 'Timebox' for the Daily Scrum is:",
          options: {
            A: "Depends on the team size.",
            B: "Exactly 15 minutes.",
            C: "No more than 15 minutes.",
            D: "As long as it takes.",
          },
          answer: "C",
          rationale: "The Daily Scrum is a 15-minute timeboxed event.",
        },
        {
          id: 71,
          question:
            "What is the Scrum Master's role in the organization's culture?",
          options: {
            A: "None.",
            B: "To lead the organization in its transition to an Agile mindset.",
            C: "To enforce strict rules.",
            D: "To organize company parties.",
          },
          answer: "B",
          rationale:
            "The SM is a change agent who helps the broader organization embrace Agility.",
        },
        {
          id: 72,
          question: "When is the Sprint Backlog created?",
          options: {
            A: "During the Daily Scrum.",
            B: "During Sprint Planning.",
            C: "Before the project starts.",
            D: "By the Product Owner alone.",
          },
          answer: "B",
          rationale:
            "The Sprint Backlog is the output of Sprint Planning, created by the Developers.",
        },
        {
          id: 73,
          question:
            "If the team is using a Burndown chart incorrectly, the SM should:",
          options: {
            A: "Remove the chart.",
            B: "Coach them on how the chart helps with transparency and self-management.",
            C: "Draw it correctly for them.",
            D: "Report them to the Product Owner.",
          },
          answer: "B",
          rationale:
            "The SM helps the team use tools effectively to support Scrum's empirical process.",
        },
        {
          id: 74,
          question:
            "During the Retrospective, who is responsible for deciding which improvements to implement?",
          options: {
            A: "The Scrum Master.",
            B: "The Product Owner.",
            C: "The Scrum Team.",
            D: "The Management.",
          },
          answer: "C",
          rationale:
            "The entire Scrum Team identifies and agrees upon the most impactful improvements to implement.",
        },
        {
          id: 75,
          question:
            "Which of the following is a primary duty of the Scrum Master?",
          options: {
            A: "Updating the budget.",
            B: "Managing the Product Backlog.",
            C: "Removing impediments to the team's progress.",
            D: "Deciding which features to build next.",
          },
          answer: "C",
          rationale:
            "Removing impediments is a core responsibility of the Scrum Master to support the team's flow.",
        },
        {
          id: 76,
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
          id: 77,
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
          id: 78,
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
          id: 79,
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
          id: 80,
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
          id: 81,
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
          id: 82,
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
          id: 83,
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
          id: 84,
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
          id: 85,
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
        {
          id: 86,
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
          id: 87,
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
          id: 88,
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
          id: 89,
          question: "Which tool is commonly used for UI design?",
          options: { A: "Figma", B: "Docker", C: "Jenkins", D: "MongoDB" },
          answer: "A",
          rationale: "Figma is widely used for collaborative UI design.",
        },
        {
          id: 90,
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
        {
          id: 91,
          question: "What is the primary goal of 'Design Thinking'?",
          options: {
            A: "To make products look as artistic as possible.",
            B: "To solve complex problems using a human-centered approach.",
            C: "To replace developers with AI designers.",
            D: "To speed up the coding process.",
          },
          answer: "B",
          rationale:
            "Design Thinking focuses on understanding user needs and iterating on solutions to solve real human problems.",
        },
        {
          id: 92,
          question:
            "In UI design, what does 'Whitespace' (or Negative Space) refer to?",
          options: {
            A: "The space on a page that is strictly colored white.",
            B: "The empty space between elements that helps prevent clutter and improves focus.",
            C: "A bug where the CSS fails to load.",
            D: "The area reserved for advertisements.",
          },
          answer: "B",
          rationale:
            "Whitespace is a design tool used to create balance, improve readability, and guide the user's attention.",
        },
        {
          id: 93,
          question: "Which of these is a 'Dark Pattern' in UX design?",
          options: {
            A: "Using a dark theme or 'Night Mode' for an app.",
            B: "Making it intentionally difficult for a user to unsubscribe from a service.",
            C: "Using high-contrast colors for accessibility.",
            D: "Designing for low-light environments.",
          },
          answer: "B",
          rationale:
            "Dark patterns are deceptive UX tricks used to manipulate users into doing things they didn't intend to do.",
        },
        {
          id: 94,
          question: "What is the 'F-Pattern' in web design?",
          options: {
            A: "A coding structure for loops.",
            B: "A common way users scan blocks of content on a screen, starting from the top-left.",
            C: "A method for organizing files in Figma.",
            D: "A grade given to poor designs.",
          },
          answer: "B",
          rationale:
            "Eye-tracking studies show users often scan screens in an 'F' shape; designers use this to place important info where it's most likely to be seen.",
        },
        {
          id: 95,
          question: "What does 'Information Architecture' (IA) focus on?",
          options: {
            A: "The speed of the database queries.",
            B: "Organizing and labeling content so users can find what they need easily.",
            C: "The physical hardware of the servers.",
            D: "The encryption of user data.",
          },
          answer: "B",
          rationale:
            "IA is the blueprint of the site’s structure—how pages and navigation are grouped and titled.",
        },
        {
          id: 96,
          question:
            "Why is 'User Testing' done with a prototype before the product is built?",
          options: {
            A: "To show off to the stakeholders.",
            B: "To identify usability issues and fix them while changes are still cheap and easy.",
            C: "To train the developers on how the app should look.",
            D: "To see if the server can handle 100 users.",
          },
          answer: "B",
          rationale:
            "Testing prototypes catches mistakes before developers write a single line of code, saving time and money.",
        },
        {
          id: 97,
          question: "What is 'Visual Hierarchy'?",
          options: {
            A: "The list of employees in the design department.",
            B: "The arrangement of elements to imply importance (e.g., using size or color).",
            C: "The order in which images are uploaded to a site.",
            D: "A type of database for storing photos.",
          },
          answer: "B",
          rationale:
            "Visual hierarchy tells the user what to look at first, second, and third through the use of scale, color, and spacing.",
        },
        {
          id: 98,
          question: "What is a 'Breadcrumb' in a web interface?",
          options: {
            A: "Small pieces of code left in the comments.",
            B: "A secondary navigation aid that shows the user's location in the site hierarchy.",
            C: "A bug that leaves trails on the screen.",
            D: "The icons used for social media links.",
          },
          answer: "B",
          rationale:
            "Breadcrumbs (e.g., Home > Shop > Shoes) help users understand where they are and how to go back.",
        },
        {
          id: 99,
          question: "In accessibility, what is the 'WCAG'?",
          options: {
            A: "A popular design software.",
            B: "Web Content Accessibility Guidelines—the international standard for web accessibility.",
            C: "A type of image format like JPEG.",
            D: "The West Coast Artists Group.",
          },
          answer: "B",
          rationale:
            "WCAG provides the specific rules designers and developers must follow to make the web inclusive for people with disabilities.",
        },
        {
          id: 100,
          question: "What is a 'High-Fidelity' (Hi-Fi) Prototype?",
          options: {
            A: "A prototype that includes high-quality audio.",
            B: "A detailed, interactive representation that looks and behaves like the final product.",
            C: "A sketch made on a napkin.",
            D: "A prototype that is very expensive to host.",
          },
          answer: "B",
          rationale:
            "Hi-Fi prototypes use real colors, fonts, and interaction logic to simulate the actual user experience.",
        },
        {
          id: 101,
          question: "What is 'Affordance' in UI design?",
          options: {
            A: "How much a design project costs.",
            B: "A visual clue that tells the user how an object can be used (e.g., a button that looks clickable).",
            C: "The speed at which a user navigates a site.",
            D: "A discount given to software subscribers.",
          },
          answer: "B",
          rationale:
            "Affordance bridges the gap between the user and the interface; it makes functions 'obvious' without instructions.",
        },
        {
          id: 102,
          question: "What is the purpose of a 'Mood Board'?",
          options: {
            A: "To track the designer's emotional state.",
            B: "To collect visual inspirations (colors, textures, fonts) to set the design direction.",
            C: "To report bugs to the developers.",
            D: "To manage the project's timeline.",
          },
          answer: "B",
          rationale:
            "Mood boards help align stakeholders on a visual 'vibe' before the actual design work begins.",
        },
        {
          id: 103,
          question:
            "Why should you avoid using color alone to convey meaning (e.g., only using red text for errors)?",
          options: {
            A: "It's too boring for users.",
            B: "Color-blind users may not be able to distinguish the message.",
            C: "Printing the website will be too expensive.",
            D: "The colors might not match the logo.",
          },
          answer: "B",
          rationale:
            "Accessibility requires that information is available in multiple ways (e.g., an icon + red color) so everyone can understand it.",
        },
        {
          id: 104,
          question: "What does 'Heuristic Evaluation' mean?",
          options: {
            A: "A complex math formula for designs.",
            B: "A usability inspection where experts check a design against a set of 'rules of thumb'.",
            C: "A way to compress image files.",
            D: "A meeting to discuss budget cuts.",
          },
          answer: "B",
          rationale:
            "Heuristics (like 'Visibility of system status') are proven principles used to quickly identify usability gaps.",
        },
        {
          id: 105,
          question: "What is a 'Call to Action' (CTA)?",
          options: {
            A: "An emergency phone call to the designer.",
            B: "A button or link intended to prompt the user to take a specific action (e.g., 'Sign Up').",
            C: "A meeting with the CEO.",
            D: "The footer of a website.",
          },
          answer: "B",
          rationale:
            "The CTA is the 'goal' of the page. It should be visually prominent to drive user conversion.",
        },
        {
          id: 106,
          question: "What is 'Mobile-First' design?",
          options: {
            A: "Designing for desktop and then removing features for mobile.",
            B: "Designing the mobile version first, then scaling up to larger screens.",
            C: "Only allowing users to access the site from a phone.",
            D: "A website that only contains mobile phone ads.",
          },
          answer: "B",
          rationale:
            "Mobile-first forces designers to prioritize the most important content due to limited screen space.",
        },
        {
          id: 107,
          question: "What is a 'User Flow'?",
          options: {
            A: "The speed of the internet connection.",
            B: "A diagram showing the path a user takes through a product to complete a task.",
            C: "The list of users currently online.",
            D: "How many times a user refreshes the page.",
          },
          answer: "B",
          rationale:
            "User flows help designers ensure there are no dead ends or confusing loops in the navigation path.",
        },
        {
          id: 108,
          question: "In typography, what is 'Kerning'?",
          options: {
            A: "The space between lines of text.",
            B: "The adjustment of space between individual letter pairs.",
            C: "The size of the font.",
            D: "The bolding of a word.",
          },
          answer: "B",
          rationale:
            "Kerning ensures that letters look evenly spaced, preventing awkward gaps like in the word 'W A V E'.",
        },
        {
          id: 109,
          question: "What is a 'Design System'?",
          options: {
            A: "A collection of reusable components and standards used to build consistent products.",
            B: "The computer the designer uses.",
            C: "A folder where all PNG files are stored.",
            D: "The login system for Figma.",
          },
          answer: "A",
          rationale:
            "Design systems (like Google's Material Design) ensure that different parts of an app look and act the same.",
        },
        {
          id: 110,
          question: "What is 'Empathy Mapping'?",
          options: {
            A: "A map showing where all the users live.",
            B: "A tool used to articulate what a designer knows about a user to create a shared understanding.",
            C: "A way to track the GPS location of a phone.",
            D: "A chart of the project's expenses.",
          },
          answer: "B",
          rationale:
            "Empathy maps break down what users Say, Think, Do, and Feel to help the team focus on human needs.",
        },
        {
          id: 111,
          question: "What is 'Iterative Design'?",
          options: {
            A: "Designing a product once and never changing it.",
            B: "A cyclic process of prototyping, testing, and refining based on feedback.",
            C: "A way to automatically generate code.",
            D: "Using the same color for every button.",
          },
          answer: "B",
          rationale:
            "Design is never 'done' on the first try. Iteration allows the design to get better through repeated testing.",
        },
        {
          id: 112,
          question: "What does 'Usability' mean?",
          options: {
            A: "How pretty the website is.",
            B: "How easy and efficient a product is for a user to accomplish their goals.",
            C: "Whether the website is currently online.",
            D: "How many people have downloaded the app.",
          },
          answer: "B",
          rationale:
            "Usability is about function. A beautiful site that is hard to use is a failed design.",
        },
        {
          id: 113,
          question: "What is the purpose of 'Skeleton Screens'?",
          options: {
            A: "A design used for Halloween-themed apps.",
            B: "Placeholders that show the layout of a page while content is still loading.",
            C: "A way to see the underlying code of a site.",
            D: "A high-contrast mode for the elderly.",
          },
          answer: "B",
          rationale:
            "Skeleton screens make a site feel faster by showing users that content is coming, reducing perceived wait time.",
        },
        {
          id: 114,
          question: "In UX, what is a 'Pain Point'?",
          options: {
            A: "A sharp corner on a mobile device.",
            B: "A specific problem or frustration a user experiences during their journey.",
            C: "The moment the project goes over budget.",
            D: "A headache caused by looking at a screen too long.",
          },
          answer: "B",
          rationale:
            "Identifying pain points is the first step to creating a design that actually provides value and relief to the user.",
        },
        {
          id: 115,
          question: "What is 'Microcopy'?",
          options: {
            A: "Very small text that is hard to read.",
            B: "The small bits of text on buttons, labels, and error messages that guide users.",
            C: "A copy of the design for mobile devices.",
            D: "Legal fine print at the bottom of a page.",
          },
          answer: "B",
          rationale:
            "Microcopy has a huge impact on UX; a friendly 'Welcome back!' feels better than a cold 'Login Success'.",
        },
        {
          id: 116,
          question: "What is 'Card Sorting' used for?",
          options: {
            A: "Playing games during a team break.",
            B: "A technique to help design or evaluate the information architecture of a site.",
            C: "Organizing the physical office space.",
            D: "Determining which developer gets which task.",
          },
          answer: "B",
          rationale:
            "Users are asked to group topics into categories, helping designers understand how people naturally expect info to be organized.",
        },
        {
          id: 117,
          question: "What is the 'Rule of Thirds' in design?",
          options: {
            A: "Only using three colors in a design.",
            B: "Dividing an image/screen into a 3x3 grid to help place elements for better balance.",
            C: "Having three designers on every project.",
            D: "Making sure the website loads in under three seconds.",
          },
          answer: "B",
          rationale:
            "Placing focal points at the intersections of these lines creates more tension, energy, and interest than simply centering everything.",
        },
        {
          id: 118,
          question: "Why is 'Consistency' important in UI design?",
          options: {
            A: "It makes the designer's job easier.",
            B: "It reduces the user's 'learning curve' because they know what to expect.",
            C: "It prevents the website from crashing.",
            D: "It's required by copyright law.",
          },
          answer: "B",
          rationale:
            "If all 'Cancel' buttons are gray, the user doesn't have to think twice before clicking one.",
        },
        {
          id: 119,
          question: "What is a 'Stepper' component in UI?",
          options: {
            A: "A device that counts your steps.",
            B: "A visual indicator used to show progress through a multi-step process (like a checkout).",
            C: "A button that increases a number by one.",
            D: "The scroll bar on the side of the screen.",
          },
          answer: "B",
          rationale:
            "Steppers manage user expectations by showing them how many steps are left in a complex task.",
        },
        {
          id: 120,
          question: "What does 'Skeuomorphism' mean?",
          options: {
            A: "A design style that mimics real-world objects and textures (like a digital button that looks like a 3D plastic button).",
            B: "The study of design history.",
            C: "A design that uses only black and white.",
            D: "The process of exporting images for the web.",
          },
          answer: "A",
          rationale:
            "Skeuomorphism was popular in early iOS designs to help users transition from physical to digital interfaces.",
        },
      ],
    },
    {
      role: "Web Developer",
      focus: "Web fundamentals + Data Structures & Algorithms (DSA)",
      flashcards: [
        {
          id: 121,
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
          id: 122,
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
          id: 123,
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
          id: 124,
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
          id: 125,
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
        {
          id: 126,
          question:
            "Which CSS property is used to change the text color of an element?",
          options: {
            A: "font-color",
            B: "text-color",
            C: "color",
            D: "background-color",
          },
          answer: "C",
          rationale:
            "In CSS, 'color' refers specifically to the foreground text color, while 'background-color' is for the element's container.",
        },
        {
          id: 127,
          question:
            "What is the time complexity of searching for an element in a sorted array using Binary Search?",
          options: {
            A: "O(1)",
            B: "O(N)",
            C: "O(log N)",
            D: "O(N^2)",
          },
          answer: "C",
          rationale:
            "Binary search divides the search interval in half each time, leading to logarithmic time complexity, which is much faster than linear search for large arrays.",
        },
        {
          id: 128,
          question:
            "In the CSS Box Model, which layer is between the content and the border?",
          options: {
            A: "Margin",
            B: "Padding",
            C: "Outline",
            D: "Thickness",
          },
          answer: "B",
          rationale:
            "Padding creates space inside the element (between content and border), while Margin creates space outside the element (beyond the border).",
        },
        {
          id: 129,
          question:
            "What does the 'L' in LIFO stand for in relation to the Stack data structure?",
          options: {
            A: "Linear",
            B: "List",
            C: "Last",
            D: "Logical",
          },
          answer: "C",
          rationale:
            "Stacks follow the 'Last-In, First-Out' principle. Think of a stack of plates: the last one you put on top is the first one you take off.",
        },
        {
          id: 130,
          question:
            "Which JavaScript method is used to add a new element to the end of an array?",
          options: {
            A: "shift()",
            B: "pop()",
            C: "push()",
            D: "unshift()",
          },
          answer: "C",
          rationale:
            "push() adds to the end; pop() removes from the end; unshift() adds to the beginning; shift() removes from the beginning.",
        },
        {
          id: 131,
          question: "What is the primary purpose of a 'Media Query' in CSS?",
          options: {
            A: "To play videos on the website.",
            B: "To query a database for media files.",
            C: "To apply styles based on device characteristics like screen width.",
            D: "To check if the user is connected to the internet.",
          },
          answer: "C",
          rationale:
            "Media queries are the backbone of responsive design, allowing the layout to change for mobile, tablet, and desktop.",
        },
        {
          id: 132,
          question: "What is a 'Closure' in JavaScript?",
          options: {
            A: "A function that has access to variables from its outer scope even after the outer function has finished.",
            B: "A method to close a browser tab.",
            C: "The end of a loop.",
            D: "A way to delete a variable to save memory.",
          },
          answer: "A",
          rationale:
            "Closures allow for data privacy and are a fundamental concept in functional programming within JavaScript.",
        },
        {
          id: 133,
          question: "Which of the following is a 'Stable' sorting algorithm?",
          options: {
            A: "Quick Sort",
            B: "Merge Sort",
            C: "Heap Sort",
            D: "Selection Sort",
          },
          answer: "B",
          rationale:
            "Stability means that elements with equal values maintain their relative order. Merge Sort is stable, while standard Quick Sort is not.",
        },
        {
          id: 134,
          question: "What does the 'Semantic' HTML tag <article> represent?",
          options: {
            A: "A decorative sidebar.",
            B: "A self-contained composition that is independently distributable (e.g., a blog post).",
            C: "A link to a news website.",
            D: "The script section of the page.",
          },
          answer: "B",
          rationale:
            "Semantic HTML improves accessibility and SEO by describing the meaning of the content rather than just its appearance.",
        },
        {
          id: 135,
          question:
            "In a Linked List, what is stored in each 'Node' besides the data?",
          options: {
            A: "An index number.",
            B: "A pointer (reference) to the next node.",
            C: "The total size of the list.",
            D: "The CSS styles for that node.",
          },
          answer: "B",
          rationale:
            "Unlike arrays, linked lists are not stored in contiguous memory; nodes stay connected via pointers to the next element.",
        },
        {
          id: 136,
          question:
            "What is the purpose of the 'alt' attribute in an <img> tag?",
          options: {
            A: "To provide an alternative URL if the image fails to load.",
            B: "To provide a text description for screen readers and search engines.",
            C: "To change the image to a different filter.",
            D: "To define the alignment of the image.",
          },
          answer: "B",
          rationale:
            "Alt text is essential for web accessibility, ensuring visually impaired users understand the image content.",
        },
        {
          id: 137,
          question:
            "Which property would you use to change the spacing between lines of text?",
          options: {
            A: "letter-spacing",
            B: "word-spacing",
            C: "line-height",
            D: "text-indent",
          },
          answer: "C",
          rationale:
            "line-height controls the vertical space between lines of text in a paragraph.",
        },
        {
          id: 138,
          question: "What is 'Hoisting' in JavaScript?",
          options: {
            A: "Moving all script tags to the bottom of the HTML.",
            B: "The behavior where variable and function declarations are moved to the top of their scope during compilation.",
            C: "Using a crane to move server hardware.",
            D: "Increasing the priority of an API call.",
          },
          answer: "B",
          rationale:
            "Hoisting allows you to call functions before they are defined in the code, though 'let' and 'const' variables have a 'Temporal Dead Zone'.",
        },
        {
          id: 139,
          question:
            "Which data structure uses the 'First-In, First-Out' (FIFO) principle?",
          options: {
            A: "Stack",
            B: "Queue",
            C: "Binary Tree",
            D: "Graph",
          },
          answer: "B",
          rationale:
            "Think of a real-world queue (a line at a store). The first person to join the line is the first person served.",
        },
        {
          id: 140,
          question: "What does the 'z-index' property in CSS control?",
          options: {
            A: "The zoom level of the page.",
            B: "The horizontal position of an element.",
            C: "The vertical stacking order of overlapping elements.",
            D: "The transparency of an element.",
          },
          answer: "C",
          rationale:
            "Elements with a higher z-index value appear 'closer' to the viewer, overlapping those with lower values.",
        },
        {
          id: 141,
          question:
            "What is the time complexity of inserting an item at the beginning of an Array of size N?",
          options: {
            A: "O(1)",
            B: "O(log N)",
            C: "O(N)",
            D: "O(N log N)",
          },
          answer: "C",
          rationale:
            "To insert at index 0, every other element in the array must be shifted one position to the right, taking linear time.",
        },
        {
          id: 142,
          question: "In JavaScript, what will 'typeof []' return?",
          options: {
            A: "'array'",
            B: "'list'",
            C: "'object'",
            D: "'undefined'",
          },
          answer: "C",
          rationale:
            "This is a known quirk in JavaScript. Arrays are technically a specialized type of object.",
        },
        {
          id: 143,
          question: "Which HTML tag is used to link an external CSS file?",
          options: {
            A: "<script>",
            B: "<style>",
            C: "<link>",
            D: "<rel>",
          },
          answer: "C",
          rationale:
            "The <link> tag goes inside the <head> and points to the stylesheet URL.",
        },
        {
          id: 144,
          question: "What is the difference between 'let' and 'var'?",
          options: {
            A: "'let' is function-scoped, 'var' is block-scoped.",
            B: "'let' is block-scoped, 'var' is function-scoped.",
            C: "There is no difference.",
            D: "'var' is for numbers, 'let' is for text.",
          },
          answer: "B",
          rationale:
            "Block scoping (let/const) is preferred in modern JS because it prevents variables from 'leaking' out of if-statements or loops.",
        },
        {
          id: 145,
          question: "What is a 'Recursion' in programming?",
          options: {
            A: "A loop that never ends.",
            B: "A function that calls itself.",
            C: "A way to delete a database.",
            D: "A syntax error.",
          },
          answer: "B",
          rationale:
            "Recursive functions solve problems by breaking them into smaller versions of the same problem. They must have a 'base case' to stop.",
        },
        {
          id: 146,
          question:
            "Which CSS unit is relative to the font-size of the root element (<html>)?",
          options: {
            A: "px",
            B: "em",
            C: "rem",
            D: "vh",
          },
          answer: "C",
          rationale:
            "'rem' stands for 'Root EM'. Unlike 'em', it doesn't change based on the parent's font-size, making it easier to manage.",
        },
        {
          id: 147,
          question: "What is the purpose of 'JSON.stringify()'?",
          options: {
            A: "To turn a string into a JavaScript object.",
            B: "To turn a JavaScript object into a JSON string.",
            C: "To encrypt user passwords.",
            D: "To check if a string is valid JSON.",
          },
          answer: "B",
          rationale:
            "This is used when you need to send data from a browser to a web server as a string.",
        },
        {
          id: 148,
          question: "What is the 'DOM' in web development?",
          options: {
            A: "Data Object Model",
            B: "Document Object Model",
            C: "Digital Ornate Monitor",
            D: "Direct Output Method",
          },
          answer: "B",
          rationale:
            "The DOM is the browser's internal representation of your HTML, which JavaScript uses to change content on the fly.",
        },
        {
          id: 149,
          question:
            "Which sorting algorithm is generally the fastest for large, random datasets?",
          options: {
            A: "Bubble Sort",
            B: "Insertion Sort",
            C: "Quick Sort",
            D: "Bogo Sort",
          },
          answer: "C",
          rationale:
            "Quick Sort has an average time complexity of O(N log N) and very low overhead, making it a standard in most language libraries.",
        },
        {
          id: 150,
          question: "What does the 'Async/Await' syntax help manage?",
          options: {
            A: "CSS animations.",
            B: "Asynchronous operations and Promises.",
            C: "Synchronous loops.",
            D: "File uploads only.",
          },
          answer: "B",
          rationale:
            "It allows you to write asynchronous code that looks and behaves like synchronous code, making it much easier to read.",
        },
        {
          id: 151,
          question:
            "In CSS Grid, which property defines the space between rows and columns?",
          options: {
            A: "margin",
            B: "padding",
            C: "gap",
            D: "border-spacing",
          },
          answer: "C",
          rationale:
            "The 'gap' (previously grid-gap) property is a shorthand for row-gap and column-gap.",
        },
        {
          id: 152,
          question:
            "Which of the following is NOT a primitive data type in JavaScript?",
          options: {
            A: "String",
            B: "Number",
            C: "Boolean",
            D: "Array",
          },
          answer: "D",
          rationale:
            "Arrays are objects. Primitives include String, Number, Boolean, Null, Undefined, Symbol, and BigInt.",
        },
        {
          id: 153,
          question: "What is a 'Base Case' in a recursive function?",
          options: {
            A: "The most complex part of the function.",
            B: "The condition that stops the recursion from continuing infinitely.",
            C: "The first time the function is called.",
            D: "The folder where the function is stored.",
          },
          answer: "B",
          rationale:
            "Without a base case, a recursive function will cause a 'Stack Overflow' by calling itself forever.",
        },
        {
          id: 154,
          question:
            "Which HTTP method is typically used to update an existing resource?",
          options: {
            A: "GET",
            B: "POST",
            C: "PUT",
            D: "DELETE",
          },
          answer: "C",
          rationale:
            "GET is for reading, POST for creating, PUT (or PATCH) for updating, and DELETE for removing.",
        },
        {
          id: 155,
          question:
            "What is the time complexity of accessing an element in an Array if you know the index?",
          options: {
            A: "O(1)",
            B: "O(N)",
            C: "O(log N)",
            D: "O(100)",
          },
          answer: "A",
          rationale:
            "Arrays are stored in contiguous memory, so the computer can jump directly to any index instantly.",
        },
        {
          id: 156,
          question:
            "What does the 'target=\"_blank\"' attribute do in an <a> tag?",
          options: {
            A: "It makes the link text blank.",
            B: "It opens the link in a new tab or window.",
            C: "It removes the underline from the link.",
            D: "It disables the link.",
          },
          answer: "B",
          rationale:
            "It is widely used to keep users on your site while they explore an external resource.",
        },
        {
          id: 157,
          question:
            "In a Binary Search Tree (BST), elements to the left of a node are always:",
          options: {
            A: "Larger than the node.",
            B: "Smaller than the node.",
            C: "Equal to the node.",
            D: "Random.",
          },
          answer: "B",
          rationale:
            "This property allows for efficient searching, as you can discard half the tree at each step.",
        },
        {
          id: 158,
          question: "Which CSS property is used to make text bold?",
          options: {
            A: "font-style",
            B: "text-decoration",
            C: "font-weight",
            D: "font-bold",
          },
          answer: "C",
          rationale:
            "font-weight: bold (or a numerical value like 700) is the correct way to control thickness.",
        },
        {
          id: 159,
          question: "What is the result of '10' + 5 in JavaScript?",
          options: {
            A: "15",
            B: "'105'",
            C: "NaN",
            D: "Error",
          },
          answer: "B",
          rationale:
            "Because one operand is a string, JavaScript performs 'type coercion' and treats the '+' as string concatenation.",
        },
        {
          id: 160,
          question:
            "What is the main benefit of using a 'Virtual DOM' (like in React)?",
          options: {
            A: "It makes the website look better.",
            B: "It reduces expensive direct updates to the real DOM by only updating what changed.",
            C: "It stores user passwords securely.",
            D: "It allows the site to work without internet.",
          },
          answer: "B",
          rationale:
            "Updating the real DOM is slow. The Virtual DOM calculates the minimum changes needed, making apps much faster.",
        },
      ],
    },
    {
      role: "Python Developer",
      focus: "Python syntax + Data Structures & Algorithms (DSA)",
      flashcards: [
        {
          id: 161,
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
          id: 162,
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
          id: 163,
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
          id: 164,
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
          id: 165,
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
        {
          id: 166,
          question: "What is the result of the expression 10 // 3 in Python?",
          options: {
            A: "3.333",
            B: "3",
            C: "4",
            D: "1",
          },
          answer: "B",
          rationale:
            "The // operator is for 'floor division.' It divides the numbers and rounds down to the nearest whole integer.",
        },
        {
          id: 167,
          question:
            "Which of these is the correct way to create a 'List Comprehension' that squares numbers 0-4?",
          options: {
            A: "[x*x for x in range(5)]",
            B: "for x in range(5): x*x",
            C: "[x^2 if x in range(5)]",
            D: "list(x**2)",
          },
          answer: "A",
          rationale:
            "List comprehensions provide a concise way to create lists. range(5) generates numbers 0, 1, 2, 3, 4.",
        },
        {
          id: 168,
          question: "In Python, what is 'PEP 8'?",
          options: {
            A: "A library for data science.",
            B: "A style guide that provides guidelines for how to write clean, readable Python code.",
            C: "The eighth version of the Python language.",
            D: "A tool used to install packages.",
          },
          answer: "B",
          rationale:
            "PEP 8 is the industry standard for Python code formatting, covering things like indentation and naming conventions.",
        },
        {
          id: 169,
          question:
            "What is the time complexity of appending an item to the end of a Python List?",
          options: {
            A: "O(1) - Amortized Constant Time",
            B: "O(N) - Linear Time",
            C: "O(log N) - Logarithmic Time",
            D: "O(N^2) - Quadratic Time",
          },
          answer: "A",
          rationale:
            "Python lists are over-allocated arrays. Adding to the end is very efficient (O(1)) because no other elements need to be shifted.",
        },
        {
          id: 170,
          question:
            "What does the 'self' keyword represent in a Python class method?",
          options: {
            A: "It refers to the class itself.",
            B: "It refers to the specific instance (object) of the class.",
            C: "It is a global variable.",
            D: "It is a built-in Python library.",
          },
          answer: "B",
          rationale:
            "'self' allows the code to access the attributes and methods of the specific object that called the function.",
        },
        {
          id: 171,
          question:
            "Which Python keyword is used to handle exceptions (errors) without crashing the program?",
          options: {
            A: "if/else",
            B: "try/except",
            C: "catch/throw",
            D: "error/pass",
          },
          answer: "B",
          rationale:
            "The try block lets you test a block of code for errors, and the except block lets you handle the error gracefully.",
        },
        {
          id: 172,
          question:
            "What is the difference between a 'Shallow Copy' and a 'Deep Copy'?",
          options: {
            A: "There is no difference in Python.",
            B: "A shallow copy only copies the reference to nested objects; a deep copy creates entirely new copies of nested objects.",
            C: "Deep copy is for strings, shallow copy is for numbers.",
            D: "Shallow copy is faster because it uses less RAM but is always safer.",
          },
          answer: "B",
          rationale:
            "If you have a list inside a list, a shallow copy means changing the inner list in one copy will change it in the other too.",
        },
        {
          id: 173,
          question:
            "What is the time complexity of searching for a value in a Dictionary?",
          options: {
            A: "O(1) on average",
            B: "O(N)",
            C: "O(log N)",
            D: "O(N log N)",
          },
          answer: "A",
          rationale:
            "Dictionaries use hash tables. This allows Python to find the value associated with a key almost instantly, regardless of the dictionary size.",
        },
        {
          id: 174,
          question: "What does the __init__ method do in a Python class?",
          options: {
            A: "It initializes the Python interpreter.",
            B: "It is the constructor method called automatically when a new object is created.",
            C: "It deletes an object from memory.",
            D: "It imports initial libraries.",
          },
          answer: "B",
          rationale:
            "The __init__ method is used to set the initial values for the object's attributes.",
        },
        {
          id: 175,
          question: "What is a 'Lambda' function in Python?",
          options: {
            A: "A function that can only be used in scientific math.",
            B: "A small, anonymous, one-line function.",
            C: "A function that runs in the background.",
            D: "A way to name variables with Greek letters.",
          },
          answer: "B",
          rationale:
            "Lambdas are useful for quick operations that you only need once, often used with functions like map(), filter(), or sort().",
        },
        {
          id: 176,
          question: "Which of these is a 'Set' in Python?",
          options: {
            A: "[1, 2, 2, 3]",
            B: "{1, 2, 2, 3}",
            C: "(1, 2, 2, 3)",
            D: "{'a': 1, 'b': 2}",
          },
          answer: "B",
          rationale:
            "Sets are defined with curly braces but no key-value pairs. Crucially, sets automatically remove duplicates, so {1, 2, 2, 3} becomes {1, 2, 3}.",
        },
        {
          id: 177,
          question: "What is the purpose of 'yield' in a Python function?",
          options: {
            A: "To stop the program immediately.",
            B: "To turn the function into a generator that returns values one at a time to save memory.",
            C: "To wait for a user's input.",
            D: "To speed up math calculations.",
          },
          answer: "B",
          rationale:
            "Generators don't store the whole list in memory; they 'yield' items one by one, which is essential for processing large datasets.",
        },
        {
          id: 178,
          question: "What is 'Duck Typing' in Python?",
          options: {
            A: "A way to name variables after animals.",
            B: "The idea that an object's suitability is determined by the presence of certain methods rather than its actual type.",
            C: "A bug where the code 'quacks' and fails.",
            D: "A security feature for encrypted data.",
          },
          answer: "B",
          rationale:
            "The saying goes: 'If it looks like a duck and quacks like a duck, it's a duck.' Python cares more about what an object can do than what it is.",
        },
        {
          id: 179,
          question:
            "What is the time complexity of a 'for' loop that iterates through a list of size N?",
          options: {
            A: "O(1)",
            B: "O(N)",
            C: "O(log N)",
            D: "O(2^N)",
          },
          answer: "B",
          rationale:
            "If you have N items, you must perform N operations. This is 'Linear' time complexity.",
        },
        {
          id: 180,
          question: "What is the difference between 'is' and '==' in Python?",
          options: {
            A: "They are identical.",
            B: "'==' checks for equality of value, while 'is' checks if both variables point to the same object in memory.",
            C: "'is' is for numbers, '==' is for strings.",
            D: "'is' is only used in if-statements.",
          },
          answer: "B",
          rationale:
            "Two lists might have the same items (== is True), but be two different objects in memory ('is' is False).",
        },
        {
          id: 181,
          question: "How do you add a comment in Python?",
          options: {
            A: "// This is a comment",
            B: "# This is a comment",
            C: "/* This is a comment */",
            D: "",
          },
          answer: "B",
          rationale:
            "The hash symbol (#) is the standard way to write single-line comments in Python.",
        },
        {
          id: 182,
          question: "What is a 'Decorator' in Python?",
          options: {
            A: "A design tool for UI.",
            B: "A way to modify the behavior of a function by 'wrapping' it in another function.",
            C: "A way to color-code your terminal output.",
            D: "A method to delete empty variables.",
          },
          answer: "B",
          rationale:
            "Decorators are often used for logging, checking permissions, or timing how long a function takes to run.",
        },
        {
          id: 183,
          question:
            "What is the result of 'apple' in ['apple', 'banana', 'cherry']?",
          options: {
            A: "True",
            B: "False",
            C: "1",
            D: "Error",
          },
          answer: "A",
          rationale:
            "The 'in' keyword is a highly readable way in Python to check if a membership exists within a collection.",
        },
        {
          id: 184,
          question:
            "In a Binary Search algorithm, what must be true about the data list?",
          options: {
            A: "The list must be empty.",
            B: "The list must be sorted.",
            C: "The list must contain only integers.",
            D: "The list must be very short.",
          },
          answer: "B",
          rationale:
            "Binary search works by jumping to the middle and eliminating half the options. This only works if the items are in order.",
        },
        {
          id: 185,
          question: "What does 'global' keyword do inside a function?",
          options: {
            A: "It makes the function accessible from the internet.",
            B: "It allows the function to modify a variable that was defined outside the function.",
            C: "It translates the code into other languages.",
            D: "It saves the variable to a global database.",
          },
          answer: "B",
          rationale:
            "By default, variables inside functions are local. 'global' tells Python to look in the outer scope instead of creating a new local one.",
        },
        {
          id: 186,
          question:
            "What is the Big O complexity of accessing a specific index in a List (e.g., my_list[5])?",
          options: {
            A: "O(1)",
            B: "O(N)",
            C: "O(log N)",
            D: "O(N^2)",
          },
          answer: "A",
          rationale:
            "Because Python lists use arrays internally, the computer can calculate exactly where index 5 is in memory and jump there instantly.",
        },
        {
          id: 187,
          question:
            "Which module in Python is typically used for basic math operations like square roots or trigonometry?",
          options: {
            A: "math",
            B: "numbers",
            C: "calc",
            D: "geometry",
          },
          answer: "A",
          rationale:
            "The built-in 'math' module provides functions like math.sqrt(), math.pi, and math.sin().",
        },
        {
          id: 188,
          question: "What is 'Slicing' in Python?",
          options: {
            A: "Deleting a list.",
            B: "Accessing a specific range of elements in a list or string (e.g., my_list[1:4]).",
            C: "Cutting the code into separate files.",
            D: "Dividing an integer by a float.",
          },
          answer: "B",
          rationale:
            "Slicing allows you to extract sub-portions of sequences easily using the [start:stop:step] syntax.",
        },
        {
          id: 189,
          question: "What is the 'Global Interpreter Lock' (GIL)?",
          options: {
            A: "A security feature that locks your computer.",
            B: "A mechanism that ensures only one thread executes Python bytecode at a time.",
            C: "A way to prevent users from copying your code.",
            D: "A tool that stops infinite loops.",
          },
          answer: "B",
          rationale:
            "The GIL is a controversial part of CPython that makes multi-threading (for CPU-heavy tasks) less efficient than in some other languages.",
        },
        {
          id: 190,
          question:
            "Which of these is used for 'multiline comments' in Python (often used as docstrings)?",
          options: {
            A: "//",
            B: "Triple quotes (''' or \"\"\")",
            C: "/* ... */",
            D: "##",
          },
          answer: "B",
          rationale:
            "While # is for single lines, triple quotes are used for multiline strings, which Python treats as comments if they aren't assigned to a variable.",
        },
        {
          id: 191,
          question:
            "What is the time complexity of a recursive Fibonacci function without memoization?",
          options: {
            A: "O(N)",
            B: "O(log N)",
            C: "O(2^N) - Exponential",
            D: "O(1)",
          },
          answer: "C",
          rationale:
            "Without saving previous results, the function branches out into two new calls for every single step, making it extremely slow for larger numbers.",
        },
        {
          id: 192,
          question:
            "Which method is used to remove an item from a list by its value (not its index)?",
          options: {
            A: "pop()",
            B: "delete()",
            C: "remove()",
            D: "discard()",
          },
          answer: "C",
          rationale:
            "list.remove('value') searches for the value and removes the first occurrence. pop(index) removes by position.",
        },
        {
          id: 193,
          question: "What is 'Recursion'?",
          options: {
            A: "A function that calls another function.",
            B: "A function that calls itself.",
            C: "A type of loop that uses 'while'.",
            D: "A way to reverse a string.",
          },
          answer: "B",
          rationale:
            "Recursion is a common algorithmic technique where a problem is solved by breaking it down into smaller versions of itself.",
        },
        {
          id: 194,
          question: "What does 'pip' stand for in Python?",
          options: {
            A: "Python Installer Package",
            B: "Preferred Installer Program (or Pip Installs Packages)",
            C: "Program Interface Protocol",
            D: "Python Internal Processor",
          },
          answer: "B",
          rationale:
            "pip is the standard package manager for Python, used to install libraries from the Python Package Index (PyPI).",
        },
        {
          id: 195,
          question: "What is an 'f-string' in Python?",
          options: {
            A: "A string used for files.",
            B: "A formatted string literal that allows embedding expressions inside string constants using {}.",
            C: "A 'fast' string that loads quicker.",
            D: "A string that only contains floating point numbers.",
          },
          answer: "B",
          rationale:
            "Introduced in Python 3.6, f-strings (e.g., f'Hello {name}') are the most modern and readable way to format strings.",
        },
        {
          id: 196,
          question:
            "What happens when you try to access a key that doesn't exist in a Dictionary?",
          options: {
            A: "It returns None.",
            B: "It returns 0.",
            C: "It raises a KeyError.",
            D: "The program crashes and deletes the dictionary.",
          },
          answer: "C",
          rationale:
            "Python is strict. To avoid this error, you can use the .get() method, which returns None instead of raising an error.",
        },
        {
          id: 197,
          question:
            "What is the time complexity of 'Bubble Sort' in the worst case?",
          options: {
            A: "O(N)",
            B: "O(N log N)",
            C: "O(N^2)",
            D: "O(1)",
          },
          answer: "C",
          rationale:
            "Bubble sort compares every element with every other element, resulting in nested loops and quadratic time complexity.",
        },
        {
          id: 198,
          question: "What is a 'Namespace' in Python?",
          options: {
            A: "A place where you store your name.",
            B: "A system that ensures all names in a program are unique and can be used without conflict.",
            C: "A type of database.",
            D: "The title of a Python file.",
          },
          answer: "B",
          rationale:
            "Namespaces are like folders for variables; they keep local variables from interfering with global ones.",
        },
        {
          id: 199,
          question: "What is the purpose of 'sys.argv'?",
          options: {
            A: "To perform system maintenance.",
            B: "To access command-line arguments passed to a Python script.",
            C: "To view the system version.",
            D: "To delete files from the system.",
          },
          answer: "B",
          rationale:
            "If you run 'python script.py data.txt', sys.argv[1] would contain 'data.txt'.",
        },
        {
          id: 200,
          question: "In the context of Algorithms, what is 'Space Complexity'?",
          options: {
            A: "How much room the computer has in its office.",
            B: "The amount of memory (RAM) an algorithm uses as the input size grows.",
            C: "The time it takes for a signal to reach space.",
            D: "The number of lines of code in a file.",
          },
          answer: "B",
          rationale:
            "A good developer cares about both how fast the code is (Time) and how much memory it uses (Space).",
        },
      ],
    },
    {
      role: "Frontend Developer",
      focus: "HTML, CSS, JavaScript, React, Accessibility",
      flashcards: [
        {
          id: 201,
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
          id: 202,
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
          id: 203,
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
          id: 204,
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
          id: 205,
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

        {
          id: 205,
          question:
            "What is the primary purpose of the 'useEffect' hook in React?",
          options: {
            A: "To create new components.",
            B: "To handle side effects like data fetching or DOM manipulation.",
            C: "To store large amounts of data.",
            D: "To replace the useState hook.",
          },
          answer: "B",
          rationale:
            "useEffect allows you to perform synchronization tasks and API calls after the component renders.",
        },
        {
          id: 206,
          question:
            "Which CSS layout module is best suited for one-dimensional layouts (either a row or a column)?",
          options: {
            A: "CSS Grid",
            B: "Flexbox",
            C: "Floats",
            D: "Position: Absolute",
          },
          answer: "B",
          rationale:
            "Flexbox is designed for linear layouts, while CSS Grid is intended for two-dimensional layouts (rows and columns simultaneously).",
        },
        {
          id: 207,
          question: "What is an 'ARIA label' used for?",
          options: {
            A: "To add styling to a button.",
            B: "To provide a text alternative for elements that screen readers might not understand.",
            C: "To speed up JavaScript execution.",
            D: "To define the font family of a paragraph.",
          },
          answer: "B",
          rationale:
            "ARIA (Accessible Rich Internet Applications) attributes help make web content more accessible to people with disabilities.",
        },
        {
          id: 208,
          question: "What does 'Lifting State Up' mean in React?",
          options: {
            A: "Moving state to a child component.",
            B: "Moving state to the closest common ancestor so multiple components can share it.",
            C: "Deleting state to improve performance.",
            D: "Uploading data to a server.",
          },
          answer: "B",
          rationale:
            "When two child components need to share the same data, you move that state to their shared parent.",
        },
        {
          id: 209,
          question:
            "In CSS, what is the difference between 'visibility: hidden' and 'display: none'?",
          options: {
            A: "There is no difference.",
            B: "'display: none' removes the element from the layout; 'visibility: hidden' hides it but keeps its space.",
            C: "'visibility: hidden' removes the element from the DOM.",
            D: "'display: none' only works on images.",
          },
          answer: "B",
          rationale:
            "An element with display: none acts as if it isn't there, whereas visibility: hidden leaves an empty 'hole' where the element was.",
        },
        {
          id: 210,
          question: "What is the 'Virtual DOM'?",
          options: {
            A: "A direct copy of the browser's HTML.",
            B: "A lightweight JavaScript representation of the real DOM used for performance optimization.",
            C: "A type of database used by React.",
            D: "A browser plugin for developers.",
          },
          answer: "B",
          rationale:
            "React compares the Virtual DOM with the real DOM and only updates the parts that actually changed.",
        },
        {
          id: 211,
          question: "Which HTTP status code represents a 'Not Found' error?",
          options: {
            A: "200",
            B: "404",
            C: "500",
            D: "301",
          },
          answer: "B",
          rationale:
            "404 is the standard client-side error code indicating the server could not find the requested resource.",
        },
        {
          id: 212,
          question: "What is the 'Box-Sizing: Border-Box' property used for?",
          options: {
            A: "To make boxes look like 3D borders.",
            B: "To include padding and border in the element's total width and height calculation.",
            C: "To remove the margin from a box.",
            D: "To animate a container's size.",
          },
          answer: "B",
          rationale:
            "It makes layout math much easier because the width you set is the final width, regardless of padding added.",
        },
        {
          id: 213,
          question: "How do 'Props' differ from 'State' in React?",
          options: {
            A: "Props are internal; State is external.",
            B: "Props are passed into a component; State is managed within the component.",
            C: "State is read-only; Props can be changed by the child.",
            D: "There is no difference; they are synonyms.",
          },
          answer: "B",
          rationale:
            "Think of Props as function arguments and State as variables declared inside the function body.",
        },
        {
          id: 214,
          question:
            "Which JavaScript array method creates a new array by performing a function on every element?",
          options: {
            A: "forEach()",
            B: "map()",
            C: "filter()",
            D: "reduce()",
          },
          answer: "B",
          rationale:
            "map() is extremely common in React for transforming data arrays into lists of UI components.",
        },
        {
          id: 215,
          question: "What is 'Event Delegation' in JavaScript?",
          options: {
            A: "Assigning a task to a different developer.",
            B: "Attaching a single event listener to a parent element to manage events for all its children.",
            C: "Deleting an event after it runs once.",
            D: "Stopping a button from being clicked.",
          },
          answer: "B",
          rationale:
            "It is more efficient than adding 100 listeners to 100 different buttons; you just listen on the container.",
        },
        {
          id: 216,
          question:
            "In React, why do you need a 'key' prop when rendering a list of items?",
          options: {
            A: "To style the items correctly.",
            B: "To help React identify which items have changed, been added, or removed for efficient re-renders.",
            C: "To encrypt the data in the list.",
            D: "Because the browser will crash without it.",
          },
          answer: "B",
          rationale:
            "Keys give elements a stable identity, allowing React to move elements instead of re-creating them.",
        },
        {
          id: 217,
          question: "What is 'Specificity' in CSS?",
          options: {
            A: "How fast a CSS file loads.",
            B: "The set of rules that determines which CSS style is applied when multiple rules match the same element.",
            C: "The ability to target specific browser versions.",
            D: "A way to write CSS in a specific language.",
          },
          answer: "B",
          rationale:
            "An ID selector is more 'specific' than a class selector, so it will win if they both try to set the same property.",
        },
        {
          id: 218,
          question: "What is the purpose of 'Next.js' in the React ecosystem?",
          options: {
            A: "To replace JavaScript with a new language.",
            B: "To provide a framework for server-side rendering, static site generation, and routing.",
            C: "To act as a database for React apps.",
            D: "To design icons for React.",
          },
          answer: "B",
          rationale:
            "Next.js builds on top of React to provide features like SEO optimization and faster initial page loads.",
        },
        {
          id: 219,
          question: "What does the 'callback' function in 'setState' do?",
          options: {
            A: "It runs before the state changes.",
            B: "It runs after the state has been updated and the component has re-rendered.",
            C: "It cancels the state update.",
            D: "It alerts the user of a change.",
          },
          answer: "B",
          rationale:
            "Since setState can be asynchronous, the callback is the safest place to perform actions that depend on the new state.",
        },
        {
          id: 220,
          question: "Which CSS unit is relative to the width of the viewport?",
          options: {
            A: "vh",
            B: "vw",
            C: "rem",
            D: "%",
          },
          answer: "B",
          rationale: "1vw is equal to 1% of the width of the browser window.",
        },
        {
          id: 221,
          question: "What is 'Destructuring' in JavaScript?",
          options: {
            A: "Deleting an object to free up memory.",
            B: "A syntax that allows you to unpack values from arrays or properties from objects into distinct variables.",
            C: "A way to break a website's layout.",
            D: "The process of minifying code.",
          },
          answer: "B",
          rationale:
            "It makes code much cleaner, especially when pulling multiple values out of React 'props'.",
        },
        {
          id: 222,
          question:
            "What is the 'Main' axis in a Flexbox container if the 'flex-direction' is 'column'?",
          options: {
            A: "Horizontal (Left to Right)",
            B: "Vertical (Top to Bottom)",
            C: "Diagonal",
            D: "There is no main axis.",
          },
          answer: "B",
          rationale:
            "The main axis follows the flex-direction. If direction is column, 'justify-content' will align items vertically.",
        },
        {
          id: 223,
          question: "What is 'Tree Shaking' in modern frontend tooling?",
          options: {
            A: "A way to animate SVG trees.",
            B: "The process of removing unused code from your final bundle to reduce file size.",
            C: "A debugging technique for nested components.",
            D: "A security check for external libraries.",
          },
          answer: "B",
          rationale:
            "Tooling (like Webpack or Vite) 'shakes' the dependency tree to drop code that isn't actually being called.",
        },
        {
          id: 224,
          question: "In React, what is a 'Fragment' (<>...</>)?",
          options: {
            A: "A broken piece of code.",
            B: "A way to group multiple elements without adding extra nodes to the DOM.",
            C: "A component that only renders on mobile.",
            D: "A style of animation.",
          },
          answer: "B",
          rationale:
            "Fragments prevent 'div soup' by allowing you to return multiple elements from a component without a wrapper div.",
        },
        {
          id: 225,
          question: "What is the purpose of 'npm' or 'yarn'?",
          options: {
            A: "To write CSS code.",
            B: "To manage project dependencies and packages.",
            C: "To host the website online.",
            D: "To edit images.",
          },
          answer: "B",
          rationale:
            "These package managers allow you to easily install and update libraries like React or Tailwind CSS.",
        },
        {
          id: 226,
          question:
            "What does the 'cascade' in Cascading Style Sheets (CSS) refer to?",
          options: {
            A: "Water-like animations.",
            B: "The way styles 'fall down' from parent to child and how conflicting rules are resolved.",
            C: "The speed at which styles are applied.",
            D: "A specific framework for CSS.",
          },
          answer: "B",
          rationale:
            "The cascade uses importance, specificity, and source order to determine which style wins.",
        },
        {
          id: 227,
          question: "What is a 'Pure Component' in React?",
          options: {
            A: "A component that has no CSS.",
            B: "A component that only re-renders if its props or state have actually changed.",
            C: "A component written in pure HTML.",
            D: "A component that doesn't use any hooks.",
          },
          answer: "B",
          rationale:
            "Pure components (or using React.memo) can improve performance by preventing unnecessary re-renders.",
        },
        {
          id: 228,
          question:
            "Which HTML attribute is used to uniquely identify an element for CSS or JS?",
          options: {
            A: "class",
            B: "id",
            C: "name",
            D: "type",
          },
          answer: "B",
          rationale:
            "An 'id' must be unique on the page, whereas 'class' can be used on multiple elements.",
        },
        {
          id: 229,
          question: "What is 'Debouncing' in frontend development?",
          options: {
            A: "Making a button bounce when clicked.",
            B: "Ensuring a function is only called once after a certain amount of time has passed since the last trigger (e.g., search inputs).",
            C: "Reducing the file size of images.",
            D: "A way to remove bugs from JavaScript.",
          },
          answer: "B",
          rationale:
            "Debouncing prevents an API from being called on every single keystroke as a user types.",
        },
        {
          id: 230,
          question: "What is the 'Shadow DOM'?",
          options: {
            A: "A hacker's version of the website.",
            B: "An encapsulated DOM used by Web Components to keep styles and logic private.",
            C: "The DOM used for dark mode.",
            D: "A way to hide code from the user.",
          },
          answer: "B",
          rationale:
            "The Shadow DOM ensures that the styles of a specific component don't leak out and affect the rest of the page.",
        },
        {
          id: 231,
          question:
            "Which CSS property is used to create space around the outside of an element's border?",
          options: {
            A: "padding",
            B: "margin",
            C: "border-spacing",
            D: "outline",
          },
          answer: "B",
          rationale:
            "Margin is the external space; Padding is the internal space.",
        },
        {
          id: 232,
          question: "In React, what is the 'Context API' used for?",
          options: {
            A: "To write better text content.",
            B: "To pass data through the component tree without having to pass props down manually at every level.",
            C: "To translate the website into different languages.",
            D: "To manage the server-side database.",
          },
          answer: "B",
          rationale:
            "Context is great for 'global' data like user authentication, themes, or language settings.",
        },
        {
          id: 233,
          question: "What is 'Progressive Enhancement'?",
          options: {
            A: "Making a website faster over time.",
            B: "Building a basic version of a site that works for everyone, then adding advanced features for modern browsers.",
            C: "Using AI to write code.",
            D: "Adding more ads to a page as a user scrolls.",
          },
          answer: "B",
          rationale:
            "It ensures that even if JavaScript fails, the user can still access the core content and functionality.",
        },
        {
          id: 234,
          question: "Which of these is a CSS Preprocessor?",
          options: {
            A: "React",
            B: "Sass",
            C: "Node.js",
            D: "JSON",
          },
          answer: "B",
          rationale:
            "Sass (Syntactically Awesome Style Sheets) adds features like variables and nesting to standard CSS.",
        },
        {
          id: 235,
          question: "What is the purpose of the 'useRef' hook?",
          options: {
            A: "To create a state variable that triggers re-renders.",
            B: "To persist a value between renders without triggering a re-render, often used to access DOM elements directly.",
            C: "To refer a friend to the app.",
            D: "To style a component.",
          },
          answer: "B",
          rationale:
            "useRef is the 'escape hatch' when you need to interact with the underlying browser API directly (like focusing an input).",
        },
        {
          id: 236,
          question: "What is 'Responsive Typography'?",
          options: {
            A: "Text that changes color when clicked.",
            B: "Text that scales its size based on the screen width (often using 'clamp()' or 'vw').",
            C: "Text that reads itself out loud.",
            D: "Using different fonts for different languages.",
          },
          answer: "B",
          rationale:
            "It ensures that headings don't look too small on desktop or too large on mobile.",
        },
        {
          id: 237,
          question: "What is a 'SPA' in web development?",
          options: {
            A: "Simple Programming Architecture",
            B: "Single Page Application",
            C: "Secure Protocol Access",
            D: "Static Page Archive",
          },
          answer: "B",
          rationale:
            "SPAs (like those built with React) load a single HTML page and dynamically update the content as the user interacts.",
        },
        {
          id: 238,
          question:
            "Which CSS property allows you to align items along the cross axis in a Flexbox container?",
          options: {
            A: "justify-content",
            B: "align-items",
            C: "flex-direction",
            D: "text-align",
          },
          answer: "B",
          rationale:
            "justify-content is for the main axis; align-items is for the cross axis.",
        },
        {
          id: 239,
          question: "What is 'Code Splitting'?",
          options: {
            A: "Dividing the development team into two groups.",
            B: "Breaking your app into smaller bundles that are loaded only when needed (Lazy Loading).",
            C: "Writing code in two different languages.",
            D: "A way to duplicate your code for safety.",
          },
          answer: "B",
          rationale:
            "Code splitting makes the initial page load much faster because the browser only downloads the code for the current page.",
        },
      ],
    },
    {
      role: "Backend Developer",
      focus: "APIs, Databases, Authentication, Server-side logic",
      flashcards: [
        {
          id: 240,
          question:
            "Which language is most commonly used for backend with Node.js?",
          options: { A: "Python", B: "JavaScript", C: "Java", D: "C#" },
          answer: "B",
          rationale: "Node.js runs JavaScript on the server.",
        },
        {
          id: 241,
          question:
            "Which HTTP method is typically used to update existing data?",
          options: { A: "GET", B: "POST", C: "PUT", D: "DELETE" },
          answer: "C",
          rationale: "PUT is used for updating resources.",
        },
        {
          id: 242,
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
          id: 243,
          question: "Which database is NoSQL?",
          options: { A: "MySQL", B: "PostgreSQL", C: "MongoDB", D: "Oracle" },
          answer: "C",
          rationale: "MongoDB stores data in JSON-like documents.",
        },
        {
          id: 244,
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
          id: 245,
          question: "In a relational database, what is a 'Primary Key'?",
          options: {
            A: "A key that opens the server room.",
            B: "A unique identifier for each record in a table.",
            C: "A password for the database administrator.",
            D: "The first column in every table.",
          },
          answer: "B",
          rationale:
            "A Primary Key ensures that every row in a table is unique and searchable.",
        },
        {
          id: 246,
          question:
            "What is the main difference between 'Authentication' and 'Authorization'?",
          options: {
            A: "They are the same thing.",
            B: "Authentication is who you are; Authorization is what you are allowed to do.",
            C: "Authentication is for users; Authorization is for servers.",
            D: "Authorization happens before Authentication.",
          },
          answer: "B",
          rationale:
            "Logging in is Authentication. Checking if you have permission to delete a file is Authorization.",
        },
        {
          id: 247,
          question:
            "What does 'Middleware' do in a web framework like Express.js?",
          options: {
            A: "It connects the frontend to the backend.",
            B: "It functions that execute during the lifecycle of a request to the server.",
            C: "It is a type of database.",
            D: "It styles the server logs.",
          },
          answer: "B",
          rationale:
            "Middleware can check for a logged-in user, log requests, or parse data before the final route logic runs.",
        },
        {
          id: 248,
          question: "What is a 'Database Index' used for?",
          options: {
            A: "To store more data.",
            B: "To speed up data retrieval operations at the cost of slower writes.",
            C: "To keep a list of all table names.",
            D: "To encrypt the database.",
          },
          answer: "B",
          rationale:
            "Indices act like the index of a book, allowing the database to find records without scanning every row.",
        },
        {
          id: 249,
          question: "What does 'ACID' stand for in database transactions?",
          options: {
            A: "Atomicity, Consistency, Isolation, Durability",
            B: "Access, Control, Internal, Data",
            C: "Always, Coding, In, Deployment",
            D: "Automatic, Cloud, Integrated, Design",
          },
          answer: "A",
          rationale:
            "ACID properties guarantee that database transactions are processed reliably.",
        },
        {
          id: 250,
          question:
            "What is the purpose of an 'ORM' (Object-Relational Mapping)?",
          options: {
            A: "To translate between code objects and database tables.",
            B: "To speed up the internet connection.",
            C: "To write CSS for the backend.",
            D: "To monitor server CPU usage.",
          },
          answer: "A",
          rationale:
            "ORMs like Sequelize or Hibernate let developers interact with databases using their preferred programming language instead of raw SQL.",
        },
        {
          id: 251,
          question: "What is a 'Foreign Key'?",
          options: {
            A: "A key from a different country.",
            B: "A field in one table that refers to the Primary Key in another table.",
            C: "A key used for encryption.",
            D: "A backup password.",
          },
          answer: "B",
          rationale:
            "Foreign keys create relationships between tables (e.g., an Order table pointing to a Customer ID).",
        },
        {
          id: 252,
          question: "Which HTTP status code category represents server errors?",
          options: {
            A: "2xx",
            B: "3xx",
            C: "4xx",
            D: "5xx",
          },
          answer: "D",
          rationale:
            "500-level codes mean the server failed to fulfill a valid request.",
        },
        {
          id: 253,
          question: "What is 'Horizontal Scaling'?",
          options: {
            A: "Buying a bigger, faster server.",
            B: "Adding more servers to handle the load.",
            C: "Optimizing the code to run faster.",
            D: "Decreasing the number of users.",
          },
          answer: "B",
          rationale:
            "Horizontal scaling involves adding more machines to your pool of resources.",
        },
        {
          id: 254,
          question: "What is a 'Rate Limiter' used for in an API?",
          options: {
            A: "To charge users more money.",
            B: "To control how many requests a user can make in a given timeframe.",
            C: "To make the database queries faster.",
            D: "To change the language of the API.",
          },
          answer: "B",
          rationale:
            "Rate limiting protects servers from being overwhelmed by too many requests or malicious attacks (DDoS).",
        },
        {
          id: 255,
          question: "In REST, what is an 'Idempotent' operation?",
          options: {
            A: "An operation that can be performed multiple times with the same result as a single call.",
            B: "An operation that is very fast.",
            C: "An operation that deletes data.",
            D: "An operation that requires no authentication.",
          },
          answer: "A",
          rationale:
            "GET, PUT, and DELETE are idempotent. Calling them multiple times shouldn't change the state beyond the first call.",
        },
        {
          id: 256,
          question:
            "What is the purpose of 'Environment Variables' (.env files)?",
          options: {
            A: "To store the user's browser settings.",
            B: "To keep sensitive configuration (like API keys) out of the source code.",
            C: "To tell the server what time it is.",
            D: "To style the code editor.",
          },
          answer: "B",
          rationale:
            "Never hardcode passwords or keys; store them in environment variables for security.",
        },
        {
          id: 257,
          question:
            "What is a 'Message Queue' (e.g., RabbitMQ, Kafka) used for?",
          options: {
            A: "To send emails instantly.",
            B: "To allow different parts of a system to communicate asynchronously.",
            C: "To store images.",
            D: "To replace the database.",
          },
          answer: "B",
          rationale:
            "Queues allow a server to say 'I'll do this task later' so the user doesn't have to wait for it to finish.",
        },
        {
          id: 258,
          question: "What is 'CORS' (Cross-Origin Resource Sharing)?",
          options: {
            A: "A way to speed up the backend.",
            B: "A browser security feature that restricts how resources are requested from another domain.",
            C: "A type of database encryption.",
            D: "A styling framework for servers.",
          },
          answer: "B",
          rationale:
            "CORS prevents malicious websites from making requests to your API without permission.",
        },
        {
          id: 259,
          question: "What is 'Salt' in the context of password hashing?",
          options: {
            A: "A physical component in the server.",
            B: "Random data added to a password before hashing to protect against rainbow table attacks.",
            C: "A way to make the password shorter.",
            D: "A database for storing usernames.",
          },
          answer: "B",
          rationale:
            "Even if two users have the same password, their hashes will look different if they have different salts.",
        },
        {
          id: 260,
          question: "What does a 'Load Balancer' do?",
          options: {
            A: "It charges the server's battery.",
            B: "It distributes incoming network traffic across multiple servers.",
            C: "It cleans up old data from the database.",
            D: "It compiles the code.",
          },
          answer: "B",
          rationale:
            "A load balancer ensures no single server becomes a bottleneck or point of failure.",
        },
        {
          id: 261,
          question: "What is 'SQL Injection'?",
          options: {
            A: "A way to make SQL queries faster.",
            B: "A vulnerability where an attacker can execute malicious SQL statements by manipulating input.",
            C: "A type of database backup.",
            D: "Adding more data to a table.",
          },
          answer: "B",
          rationale:
            "Properly sanitizing inputs or using parameterized queries prevents this dangerous attack.",
        },
        {
          id: 262,
          question: "What is the purpose of 'Redis'?",
          options: {
            A: "To act as a high-performance, in-memory data store for caching and sessions.",
            B: "To replace HTML.",
            C: "To write server-side logic in a new language.",
            D: "To monitor network cables.",
          },
          answer: "A",
          rationale:
            "Because it's in-memory, Redis is extremely fast for frequently accessed data.",
        },
        {
          id: 263,
          question: "What is a 'Websocket'?",
          options: {
            A: "A way to plug a computer into the wall.",
            B: "A protocol for full-duplex, real-time communication between client and server.",
            C: "A secure version of HTTP.",
            D: "A type of browser extension.",
          },
          answer: "B",
          rationale:
            "Unlike HTTP, Websockets keep a connection open for instant two-way data flow (like in chat apps).",
        },
        {
          id: 264,
          question: "What is the 'Request-Response Cycle'?",
          options: {
            A: "How a developer writes code.",
            B: "The process of a client sending a request and the server returning a response.",
            C: "The way a database saves data.",
            D: "The lifecycle of a physical server.",
          },
          answer: "B",
          rationale:
            "This is the fundamental way the web works: Client asks, Server answers.",
        },
        {
          id: 265,
          question: "What is a 'Microservice Architecture'?",
          options: {
            A: "One giant server for everything.",
            B: "Splitting a large application into small, independent services that communicate via APIs.",
            C: "Using very small computers.",
            D: "Writing code in a tiny font.",
          },
          answer: "B",
          rationale:
            "Microservices allow teams to build, deploy, and scale parts of an app independently.",
        },
        {
          id: 266,
          question: "What is the purpose of the 'PATCH' method?",
          options: {
            A: "To delete a resource.",
            B: "To apply partial modifications to a resource.",
            C: "To replace an entire resource.",
            D: "To fetch all resources.",
          },
          answer: "B",
          rationale:
            "PUT replaces the whole thing; PATCH only updates the specific fields you send.",
        },
        {
          id: 267,
          question: "What is 'Database Normalization'?",
          options: {
            A: "Making sure the database is not broken.",
            B: "Organizing data to reduce redundancy and improve data integrity.",
            C: "Filling the database with sample data.",
            D: "Converting SQL to NoSQL.",
          },
          answer: "B",
          rationale:
            "Normalization ensures that each piece of data is stored in only one place.",
        },
        {
          id: 268,
          question: "What is a 'Cron Job'?",
          options: {
            A: "A job for a specific person.",
            B: "A scheduled task that runs automatically at fixed intervals.",
            C: "A type of server hardware.",
            D: "A backup of the code.",
          },
          answer: "B",
          rationale:
            "Cron jobs are used for things like daily backups or sending weekly reports.",
        },
        {
          id: 269,
          question: "What is 'gRPC'?",
          options: {
            A: "A type of computer screen.",
            B: "A high-performance Remote Procedure Call (RPC) framework developed by Google.",
            C: "A way to style console logs.",
            D: "A database for images.",
          },
          answer: "B",
          rationale:
            "gRPC is often used for efficient communication between microservices.",
        },
        {
          id: 270,
          question: "What does 'Statelessness' mean in REST APIs?",
          options: {
            A: "The server doesn't have a state.",
            B: "The server does not store any client context between requests; each request must contain all info needed.",
            C: "The API is only for one country.",
            D: "The API never crashes.",
          },
          answer: "B",
          rationale:
            "Statelessness makes it easier to scale horizontally because any server can handle any request.",
        },
        {
          id: 271,
          question: "What is a 'Database Schema'?",
          options: {
            A: "The physical location of the database.",
            B: "The formal structure and organization of data in a database.",
            C: "A plan to steal data.",
            D: "A type of data encryption.",
          },
          answer: "B",
          rationale:
            "A schema defines tables, fields, types, and relationships.",
        },
        {
          id: 272,
          question: "What is 'Polyglot Persistence'?",
          options: {
            A: "Using many languages to write one server.",
            B: "Using different data storage technologies (SQL, NoSQL, Cache) for different needs within one app.",
            C: "Translating the database into many languages.",
            D: "A bug where data is saved twice.",
          },
          answer: "B",
          rationale:
            "An app might use PostgreSQL for users and Redis for speed.",
        },
        {
          id: 273,
          question: "What is 'Payload' in the context of an API request?",
          options: {
            A: "The cost of the API call.",
            B: "The actual data being transmitted in the body of the request or response.",
            C: "The time it takes to send data.",
            D: "The encryption key.",
          },
          answer: "B",
          rationale:
            "If you send a JSON object with a user's name, that JSON object is the payload.",
        },
        {
          id: 274,
          question: "What is 'Service Discovery'?",
          options: {
            A: "Finding a new job.",
            B: "The automatic detection of devices and services offered by a computer network.",
            C: "A list of all libraries used.",
            D: "The process of naming a server.",
          },
          answer: "B",
          rationale:
            "In microservices, Service Discovery helps Service A find the network address of Service B.",
        },
        {
          id: 275,
          question: "What is 'OIDC' (OpenID Connect)?",
          options: {
            A: "A way to connect to the internet.",
            B: "An identity layer on top of the OAuth 2.0 protocol for authentication.",
            C: "A type of database connector.",
            D: "A design framework.",
          },
          answer: "B",
          rationale:
            "OIDC allows users to log in to websites using their Google or Microsoft accounts.",
        },
        {
          id: 276,
          question: "What is 'Data Scrubbing'?",
          options: {
            A: "Cleaning the physical hard drive.",
            B: "The process of removing or correcting incorrect, incomplete, or duplicate data.",
            C: "Deleting the database.",
            D: "Compressing the database.",
          },
          answer: "B",
          rationale:
            "Scrubbing ensures that data used for analysis or production is accurate.",
        },
        {
          id: 277,
          question: "What is the purpose of 'API Versioning'?",
          options: {
            A: "To make the API look new.",
            B: "To ensure changes don't break existing client integrations.",
            C: "To charge more for newer versions.",
            D: "To track which developer wrote the code.",
          },
          answer: "B",
          rationale:
            "By using /v1/ and /v2/, you can add features without breaking apps using the old logic.",
        },
        {
          id: 278,
          question: "What is 'Server-Side Rendering' (SSR)?",
          options: {
            A: "The server generating the full HTML for a page and sending it to the client.",
            B: "The server running a video game.",
            C: "The client building the HTML.",
            D: "The server drawing images.",
          },
          answer: "A",
          rationale:
            "SSR is good for SEO and faster initial 'meaningful' paint on the screen.",
        },
        {
          id: 279,
          question: "What is 'Throughput' in a backend system?",
          options: {
            A: "How heavy the server is.",
            B: "The number of requests a system can handle in a specific period of time.",
            C: "The time it takes for one request to finish.",
            D: "The length of the code.",
          },
          answer: "B",
          rationale:
            "Throughput measures the 'volume' of work a system can do.",
        },
        {
          id: 280,
          question: "What is 'Latency'?",
          options: {
            A: "The time it takes for a single request to travel to the server and back.",
            B: "The number of users online.",
            C: "The total size of the database.",
            D: "The age of the server.",
          },
          answer: "A",
          rationale:
            "Latency is 'delay'. Low latency means the system feels fast and responsive.",
        },
      ],
    },
    {
      role: "Fullstack Developer",
      focus: "Frontend + Backend integration, APIs, Deployment",
      flashcards: [
        {
          id: 281,
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
          id: 282,
          question: "Which tool is commonly used for bundling frontend code?",
          options: { A: "Webpack", B: "Docker", C: "Postman", D: "Jenkins" },
          answer: "A",
          rationale: "Webpack bundles frontend assets.",
        },
        {
          id: 283,
          question: "Which HTTP method is used to delete a resource?",
          options: { A: "REMOVE", B: "DELETE", C: "DROP", D: "DESTROY" },
          answer: "B",
          rationale: "DELETE removes resources in REST APIs.",
        },
        {
          id: 284,
          question: "Which cloud provider offers Lambda functions?",
          options: { A: "AWS", B: "Azure", C: "Google Cloud", D: "Heroku" },
          answer: "A",
          rationale: "AWS Lambda provides serverless compute.",
        },
        {
          id: 285,
          question: "What is 'CI/CD'?",
          options: {
            A: "Computer Integration / Constant Design",
            B: "Continuous Integration / Continuous Deployment",
            C: "Coding Interface / Creative Development",
            D: "Cloud Information / Cyber Defense",
          },
          answer: "B",
          rationale:
            "CI/CD automates the testing and shipping of code so updates can happen frequently and safely.",
        },
        {
          id: 286,
          question: "What is 'Docker'?",
          options: {
            A: "A type of database.",
            B: "A platform for building, shipping, and running applications in isolated containers.",
            C: "A coding language.",
            D: "A web browser.",
          },
          answer: "B",
          rationale:
            "Docker ensures that an app runs the same way on a developer's laptop as it does on a production server.",
        },
        {
          id: 287,
          question: "What is a 'Monolith' architecture?",
          options: {
            A: "A very large server.",
            B: "An application where all components (UI, API, DB) are combined into a single codebase/unit.",
            C: "An app that only has one user.",
            D: "A server built into a rock.",
          },
          answer: "B",
          rationale:
            "Monoliths are easier to start with but can become difficult to manage as they grow very large.",
        },
        {
          id: 288,
          question:
            "What does 'Hydration' mean in the context of React/Next.js?",
          options: {
            A: "Giving the server more memory.",
            B: "The process where React attaches event listeners to the static HTML sent by the server.",
            C: "Refreshing the browser.",
            D: "Cleaning up old data.",
          },
          answer: "B",
          rationale:
            "Hydration turns static 'dead' HTML into an interactive 'live' React app.",
        },
        {
          id: 289,
          question: "What is 'Kubernetes' (K8s)?",
          options: {
            A: "A type of container.",
            B: "An orchestration system for automating the deployment and scaling of containerized apps.",
            C: "A replacement for JavaScript.",
            D: "A cloud provider like AWS.",
          },
          answer: "B",
          rationale:
            "If Docker creates the containers, Kubernetes manages the fleet of containers.",
        },
        {
          id: 290,
          question: "What is 'Serverless' computing?",
          options: {
            A: "A computer with no hard drive.",
            B: "A model where the cloud provider manages the server infrastructure, and you just provide the code.",
            C: "Coding without an internet connection.",
            D: "A server that never turns on.",
          },
          answer: "B",
          rationale:
            "In 'Serverless' (like AWS Lambda), you don't have to worry about OS updates or scaling servers manually.",
        },
        {
          id: 291,
          question: "What is a 'Web Hook'?",
          options: {
            A: "A way to catch hackers.",
            B: "An automated message sent from an app when something happens (a 'callback' over the web).",
            C: "A tool for UI design.",
            D: "A type of API key.",
          },
          answer: "B",
          rationale:
            "Webhooks are used to notify your system about external events, like a successful Stripe payment.",
        },
        {
          id: 292,
          question: "What is 'XSS' (Cross-Site Scripting)?",
          options: {
            A: "A type of CSS animation.",
            B: "A security vulnerability where an attacker injects malicious scripts into a trusted website.",
            C: "A way to share files.",
            D: "A faster version of HTTP.",
          },
          answer: "B",
          rationale:
            "Always sanitize user-generated content to prevent them from running scripts in other users' browsers.",
        },
        {
          id: 293,
          question: "What is 'CSRF' (Cross-Site Request Forgery)?",
          options: {
            A: "A way to speed up the frontend.",
            B: "An attack that tricks a user into performing actions they didn't intend to on a different website.",
            C: "A type of data encryption.",
            D: "A cloud deployment strategy.",
          },
          answer: "B",
          rationale:
            "CSRF protection (like tokens) ensures that the request actually came from your own application.",
        },
        {
          id: 294,
          question: "What is 'Static Site Generation' (SSG)?",
          options: {
            A: "Building the website as the user clicks.",
            B: "Generating the entire website's HTML at build time.",
            C: "A website that never updates.",
            D: "Designing a site without any code.",
          },
          answer: "B",
          rationale:
            "SSG pages are extremely fast because they are just static files served from a CDN.",
        },
        {
          id: 295,
          question: "What is the 'Jamstack'?",
          options: {
            A: "A stack for music apps.",
            B: "JavaScript, APIs, and Markup.",
            C: "Java, Android, and MySQL.",
            D: "JSON, Angular, and MongoDB.",
          },
          answer: "B",
          rationale:
            "Jamstack focuses on decoupling the frontend from the backend for better performance and security.",
        },
        {
          id: 296,
          question: "What is 'Environment Parity'?",
          options: {
            A: "Using the same computer for 10 years.",
            B: "Keeping development, staging, and production environments as similar as possible.",
            C: "Making the code work on both Mac and Windows.",
            D: "Having the same number of developers as testers.",
          },
          answer: "B",
          rationale: "Parity reduces 'it works on my machine' bugs.",
        },
        {
          id: 297,
          question: "What is 'Postman' used for?",
          options: {
            A: "Delivering physical mail.",
            B: "Testing and documenting APIs.",
            C: "Writing CSS.",
            D: "Managing database backups.",
          },
          answer: "B",
          rationale:
            "Postman allows you to send requests to your API and see the responses without a frontend.",
        },
        {
          id: 298,
          question: "What is 'Vercel' or 'Netlify'?",
          options: {
            A: "Database providers.",
            B: "Cloud platforms optimized for hosting frontend and fullstack (serverless) applications.",
            C: "JavaScript libraries.",
            D: "Code editors.",
          },
          answer: "B",
          rationale:
            "These platforms offer easy 'Git-to-Deploy' workflows for modern web apps.",
        },
        {
          id: 299,
          question: "What is 'BFF' (Backend for Frontend)?",
          options: {
            A: "Best Friend Forever.",
            B: "A pattern where a specific backend is created to serve a specific frontend (like a mobile app).",
            C: "A way to connect two databases.",
            D: "A security certificate.",
          },
          answer: "B",
          rationale:
            "A BFF helps tailor API responses specifically for the needs of a certain device or UI.",
        },
        {
          id: 300,
          question: "What is 'Lazy Loading'?",
          options: {
            A: "A developer who doesn't work hard.",
            B: "Loading resources (like images or code) only when they are actually needed.",
            C: "A slow internet connection.",
            D: "An error in the code.",
          },
          answer: "B",
          rationale:
            "Lazy loading saves bandwidth and makes the initial page load faster.",
        },
        {
          id: 301,
          question: "What is 'Terraform'?",
          options: {
            A: "A tool for gardening.",
            B: "An 'Infrastructure as Code' (IaC) tool for building and changing cloud resources safely.",
            C: "A new operating system.",
            D: "A database for maps.",
          },
          answer: "B",
          rationale:
            "Terraform lets you define your servers and networks in a file rather than clicking buttons in a cloud console.",
        },
        {
          id: 302,
          question: "What is 'Nginx' often used for?",
          options: {
            A: "As a web server, reverse proxy, and load balancer.",
            B: "To write JavaScript code.",
            C: "To design websites.",
            D: "As a mobile operating system.",
          },
          answer: "A",
          rationale:
            "Nginx is a versatile tool for handling web traffic before it reaches your application.",
        },
        {
          id: 303,
          question: "What is 'Feature Flagging'?",
          options: {
            A: "Reporting a bug in a feature.",
            B: "A technique to turn features on or off in production without redeploying code.",
            C: "A way to name variables.",
            D: "A type of test.",
          },
          answer: "B",
          rationale:
            "Feature flags allow for 'Dark Launches' and easy A/B testing.",
        },
        {
          id: 304,
          question: "What is 'Content Delivery Network' (CDN)?",
          options: {
            A: "A network for watching movies.",
            B: "A system of distributed servers that deliver web content to users based on their location.",
            C: "A type of internet cable.",
            D: "A database for video files.",
          },
          answer: "B",
          rationale:
            "CDNs make websites faster by serving files from a server physically close to the user.",
        },
        {
          id: 305,
          question: "What is 'Blue-Green Deployment'?",
          options: {
            A: "Designing a site with blue and green colors.",
            B: "A strategy where you have two identical production environments to reduce downtime during updates.",
            C: "A type of environment for plants.",
            D: "Coding in two different languages.",
          },
          answer: "B",
          rationale:
            "You route traffic to the 'Green' (new) version, and if it fails, you instantly switch back to the 'Blue' (old) version.",
        },
        {
          id: 306,
          question: "What is 'Semantic Versioning' (SemVer)?",
          options: {
            A: "Naming your code with meaningful words.",
            B: "A numbering scheme (Major.Minor.Patch) that conveys the type of changes in a release.",
            C: "Writing code that makes sense.",
            D: "The order in which files are saved.",
          },
          answer: "B",
          rationale:
            "SemVer (e.g., 2.1.0) tells other developers if a change is a tiny fix or a big, breaking update.",
        },
        {
          id: 307,
          question: "What is 'SSH' (Secure Shell)?",
          options: {
            A: "A type of web browser.",
            B: "A protocol for secure remote access to a computer or server.",
            C: "A way to hide your code.",
            D: "A coding language.",
          },
          answer: "B",
          rationale:
            "Developers use SSH to log into servers to perform maintenance or deployments.",
        },
        {
          id: 308,
          question: "What is 'SSR' vs 'CSR'?",
          options: {
            A: "Server-Side Rendering vs Client-Side Rendering.",
            B: "Server Security vs Client Security.",
            C: "Standard Rendering vs Custom Rendering.",
            D: "Server Storage vs Client Storage.",
          },
          answer: "A",
          rationale:
            "SSR happens on the server (faster first load); CSR happens in the browser (smoother page transitions).",
        },
        {
          id: 309,
          question: "What is 'Firebase'?",
          options: {
            A: "A tool for fire safety.",
            B: "A platform by Google that provides backend services like DB, Auth, and Hosting for web/mobile.",
            C: "A type of web browser.",
            D: "A JavaScript framework.",
          },
          answer: "B",
          rationale:
            "Firebase is a popular 'Backend-as-a-Service' (BaaS) for rapid development.",
        },
        {
          id: 310,
          question: "What is 'Unit Testing'?",
          options: {
            A: "Testing the entire app at once.",
            B: "Testing individual small pieces (units) of code in isolation.",
            C: "Testing how much weight a server can handle.",
            D: "Asking a friend to use the app.",
          },
          answer: "B",
          rationale:
            "Unit tests ensure that a single function or component behaves exactly as expected.",
        },
        {
          id: 311,
          question: "What is 'Integration Testing'?",
          options: {
            A: "Testing if the developer fits in the team.",
            B: "Testing how different modules or services work together.",
            C: "Adding a new feature to the app.",
            D: "Checking the internet speed.",
          },
          answer: "B",
          rationale:
            "Integration tests catch bugs that happen when two pieces of code (that work alone) fail to communicate.",
        },
        {
          id: 312,
          question: "What is 'E2E Testing' (End-to-End)?",
          options: {
            A: "Testing from the start to the end of the day.",
            B: "Testing the entire user flow from the frontend to the backend and database.",
            C: "A test for two developers.",
            D: "Only testing the footer of a website.",
          },
          answer: "B",
          rationale:
            "E2E tests (using tools like Cypress) simulate a real user clicking through the whole app.",
        },
        {
          id: 313,
          question: "What is 'TDD' (Test-Driven Development)?",
          options: {
            A: "Testing During Development.",
            B: "A process where you write the test BEFORE you write the actual code.",
            C: "Total Design Development.",
            D: "Testing only the database.",
          },
          answer: "B",
          rationale:
            "TDD follows the 'Red-Green-Refactor' cycle to ensure code is robust from the start.",
        },
        {
          id: 314,
          question: "What is a 'Slug' in a URL?",
          options: {
            A: "A slow loading page.",
            B: "The part of a URL that identifies a specific page in a human-readable format (e.g., /my-blog-post).",
            C: "A bug in the browser.",
            D: "The domain name.",
          },
          answer: "B",
          rationale:
            "Slugs are better for SEO and users than numeric IDs like /post/123.",
        },
        {
          id: 315,
          question: "What is 'Pagination'?",
          options: {
            A: "Creating a new page.",
            B: "Dividing a large set of data into smaller chunks or pages.",
            C: "The order of scripts.",
            D: "A way to print a website.",
          },
          answer: "B",
          rationale:
            "Pagination prevents a server from trying to send 1,000,000 records at once.",
        },
        {
          id: 316,
          question: "What is 'Hydration Error'?",
          options: {
            A: "A computer getting wet.",
            B: "A mismatch between the HTML generated on the server and the HTML React expected on the client.",
            C: "A database timeout.",
            D: "A missing CSS file.",
          },
          answer: "B",
          rationale:
            "This often happens if you use random numbers or dates that change between server and client rendering.",
        },
        {
          id: 317,
          question: "What is 'Docker Compose'?",
          options: {
            A: "A way to write music with Docker.",
            B: "A tool for defining and running multi-container Docker applications.",
            C: "A code editor.",
            D: "A cloud provider.",
          },
          answer: "B",
          rationale:
            "It lets you start your app, database, and cache all with one command.",
        },
        {
          id: 318,
          question: "What is 'Hot Module Replacement' (HMR)?",
          options: {
            A: "A server overheating.",
            B: "A feature that updates the code in the browser without a full page refresh during development.",
            C: "Replacing a hard drive while the server is running.",
            D: "A faster way to download libraries.",
          },
          answer: "B",
          rationale:
            "HMR keeps the app's state (like text in an input) while you change the code.",
        },
        {
          id: 319,
          question: "What is 'Web Vitals'?",
          options: {
            A: "The server's heartbeat.",
            B: "A set of metrics (by Google) that measure the health and user experience of a website.",
            C: "A coding language.",
            D: "A security scan.",
          },
          answer: "B",
          rationale:
            "Vitals like 'Largest Contentful Paint' help you see how fast and stable your site feels to users.",
        },
        {
          id: 320,
          question: "What is 'Micro-Frontends'?",
          options: {
            A: "A website for small screens.",
            B: "An architecture where a single frontend is composed of small, independent pieces built by different teams.",
            C: "A very small CSS file.",
            D: "A bug in the UI.",
          },
          answer: "B",
          rationale: "It brings the microservices concept to the frontend.",
        },
      ],
    },
    {
      role: "Data Scientist",
      focus: "Machine Learning, Statistics, Python, Data Visualization",
      flashcards: [
        {
          id: 321,
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
          id: 322,
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
          id: 323,
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
          id: 324,
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
          id: 325,
          question: "What is 'Supervised Learning'?",
          options: {
            A: "Learning with a teacher watching the computer.",
            B: "Training a model on a dataset where the answers (labels) are already known.",
            C: "A computer learning on its own without any data.",
            D: "Manually entering every piece of data.",
          },
          answer: "B",
          rationale:
            "The model 'learns' the relationship between inputs and known outputs to predict future results.",
        },
        {
          id: 326,
          question: "What is the 'Mean' of a dataset?",
          options: {
            A: "The middle number.",
            B: "The most frequent number.",
            C: "The average value (sum divided by count).",
            D: "The difference between high and low.",
          },
          answer: "C",
          rationale: "Mean is the standard average.",
        },
        {
          id: 327,
          question: "What is 'Unsupervised Learning'?",
          options: {
            A: "Learning without a teacher.",
            B: "Training a model to find hidden patterns in data that has no labels.",
            C: "An error where the computer stops learning.",
            D: "Learning using only images.",
          },
          answer: "B",
          rationale:
            "Clustering (grouping similar customers) is a classic unsupervised learning task.",
        },
        {
          id: 328,
          question: "What is a 'Correlation' in statistics?",
          options: {
            A: "When one thing causes another.",
            B: "A measure of how two variables move in relation to each other.",
            C: "A mistake in the data.",
            D: "The total number of rows.",
          },
          answer: "B",
          rationale:
            "Correlation does NOT imply causation. Just because two things move together doesn't mean one caused the other.",
        },
        {
          id: 329,
          question: "What is 'Feature Engineering'?",
          options: {
            A: "Designing a new car feature.",
            B: "The process of using domain knowledge to select/transform raw data into better inputs for a model.",
            C: "Writing the code for a website.",
            D: "Deleting data to make the model run faster.",
          },
          answer: "B",
          rationale:
            "Better features often lead to better models more than complex algorithms do.",
        },
        {
          id: 330,
          question: "What is 'Data Wrangling' (or Munging)?",
          options: {
            A: "Fighting with a computer.",
            B: "The process of cleaning, transforming, and mapping raw data into a usable format.",
            C: "Collecting data from the internet.",
            D: "Storing data in a database.",
          },
          answer: "B",
          rationale:
            "Data scientists often spend 80% of their time wrangling data and only 20% modeling.",
        },
        {
          id: 331,
          question: "What is 'P-value' used for?",
          options: {
            A: "To measure the speed of the code.",
            B: "To determine the statistical significance of a result.",
            C: "To count the number of parameters.",
            D: "To determine the price of a model.",
          },
          answer: "B",
          rationale:
            "A low p-value (usually < 0.05) suggests that a result is unlikely to have occurred by chance.",
        },
        {
          id: 332,
          question: "What is a 'Confusion Matrix'?",
          options: {
            A: "A matrix that is hard to read.",
            B: "A table used to describe the performance of a classification model (True Positives, False Positives, etc.).",
            C: "A bug in the code.",
            D: "A way to encrypt data.",
          },
          answer: "B",
          rationale:
            "It shows exactly where the model is getting 'confused' between different categories.",
        },
        {
          id: 333,
          question: "What is 'Deep Learning'?",
          options: {
            A: "Learning while sleeping.",
            B: "A subset of machine learning based on artificial neural networks with many layers.",
            C: "A way to store data deep in the earth.",
            D: "Study of data science history.",
          },
          answer: "B",
          rationale:
            "Deep learning powers things like image recognition and language translation.",
        },
        {
          id: 334,
          question: "What is a 'Standard Deviation'?",
          options: {
            A: "A measure of the average distance of data points from the mean.",
            B: "The highest value in the data.",
            C: "The total number of errors.",
            D: "A rule that everyone follows.",
          },
          answer: "A",
          rationale:
            "A high standard deviation means the data is spread out; a low one means it's clustered around the mean.",
        },
        {
          id: 335,
          question: "What is the 'Bias-Variance Tradeoff'?",
          options: {
            A: "Trading data for more time.",
            B: "The conflict between making a model simple (bias) and making it complex (variance).",
            C: "A way to pay for cloud computing.",
            D: "An error in the statistics.",
          },
          answer: "B",
          rationale:
            "You want a balance to avoid both underfitting (too simple) and overfitting (too complex).",
        },
        {
          id: 336,
          question: "What is 'K-Means' used for?",
          options: {
            A: "Classification.",
            B: "Clustering (grouping data points together).",
            C: "Regression.",
            D: "Data cleaning.",
          },
          answer: "B",
          rationale: "K-Means finds the 'centers' of groups in the data.",
        },
        {
          id: 337,
          question: "What is 'NLP' (Natural Language Processing)?",
          options: {
            A: "Normal Library Processing.",
            B: "The field of AI that focuses on the interaction between computers and human language.",
            C: "A way to name variables.",
            D: "A database for text.",
          },
          answer: "B",
          rationale:
            "NLP is used for chatbots, sentiment analysis, and translation.",
        },
        {
          id: 338,
          question: "What is 'Cross-Validation'?",
          options: {
            A: "Asking another scientist to check your work.",
            B: "A technique to evaluate a model's performance by splitting the data into multiple training/test sets.",
            C: "Checking the data twice.",
            D: "A type of visualization.",
          },
          answer: "B",
          rationale:
            "It helps ensure the model's performance is consistent and not just a fluke of one specific split.",
        },
        {
          id: 339,
          question: "What is an 'Outlier'?",
          options: {
            A: "A person who works outdoors.",
            B: "A data point that is significantly different from the other observations.",
            C: "A data point that is outside the database.",
            D: "The result of a model.",
          },
          answer: "B",
          rationale:
            "Outliers can sometimes be errors, but they can also represent very important exceptions.",
        },
        {
          id: 340,
          question: "What is 'Reinforcement Learning'?",
          options: {
            A: "Learning through a system of rewards and punishments (trials and errors).",
            B: "Making the model run faster.",
            C: "Adding more data to a model.",
            D: "Study of how humans learn.",
          },
          answer: "A",
          rationale:
            "This is how AI learns to play games or drive cars—by trying things and seeing what 'wins'.",
        },
        {
          id: 341,
          question: "What is the 'Median'?",
          options: {
            A: "The average.",
            B: "The middle value when the data is sorted.",
            C: "The highest value.",
            D: "The lowest value.",
          },
          answer: "B",
          rationale:
            "Median is often better than Mean when the data has extreme outliers.",
        },
        {
          id: 342,
          question: "What is 'One-Hot Encoding'?",
          options: {
            A: "A way to make the computer run hot.",
            B: "Converting categorical variables into a numerical format that a model can understand.",
            C: "Encrypting the data.",
            D: "A type of data visualization.",
          },
          answer: "B",
          rationale:
            "Models can't understand 'Red' or 'Blue', but they can understand '1' or '0'.",
        },
        {
          id: 343,
          question: "What is a 'Neural Network'?",
          options: {
            A: "A computer made of brains.",
            B: "A series of algorithms that mimic the way the human brain operates to recognize relationships in data.",
            C: "A network of computers.",
            D: "A way to connect to the internet.",
          },
          answer: "B",
          rationale: "Neural networks are the foundation of Deep Learning.",
        },
        {
          id: 344,
          question: "What is 'Big Data'?",
          options: {
            A: "A large computer.",
            B: "Extremely large datasets that may be analyzed computationally to reveal patterns/trends.",
            C: "A long list of numbers.",
            D: "A database that is full.",
          },
          answer: "B",
          rationale:
            "Big Data is often defined by the 3 Vs: Volume, Velocity, and Variety.",
        },
        {
          id: 345,
          question: "What is 'Exploratory Data Analysis' (EDA)?",
          options: {
            A: "Looking for data on the internet.",
            B: "Analyzing datasets to summarize their main characteristics, often using visual methods.",
            C: "The first time you see a database.",
            D: "Writing the final report.",
          },
          answer: "B",
          rationale:
            "EDA is what you do first to understand 'what the data is telling you'.",
        },
        {
          id: 346,
          question: "What is 'A/B Testing'?",
          options: {
            A: "Testing with two scientists.",
            B: "A randomized experiment with two variants (A and B) to see which performs better.",
            C: "A way to grade models.",
            D: "A type of classification.",
          },
          answer: "B",
          rationale:
            "Commonly used in web design to see which button color gets more clicks.",
        },
        {
          id: 347,
          question: "What is 'Random Forest'?",
          options: {
            A: "A park with random trees.",
            B: "An ensemble learning method that operates by constructing a multitude of decision trees.",
            C: "A bug in a decision tree.",
            D: "A way to generate random numbers.",
          },
          answer: "B",
          rationale:
            "Random Forest is powerful because it combines the 'wisdom' of many different trees.",
        },
        {
          id: 348,
          question: "What is 'Precision'?",
          options: {
            A: "The percentage of correct predictions among all positive predictions.",
            B: "How fast the model is.",
            C: "The number of digits after the decimal.",
            D: "How many rows the data has.",
          },
          answer: "A",
          rationale:
            "Precision asks: 'Of all the people we said have the disease, how many actually do?'",
        },
        {
          id: 349,
          question: "What is 'Recall'?",
          options: {
            A: "Remembering the data.",
            B: "The percentage of correct predictions among all actual positive cases.",
            C: "A way to delete a model.",
            D: "The time it takes to load data.",
          },
          answer: "B",
          rationale:
            "Recall asks: 'Of all the people who actually have the disease, how many did we find?'",
        },
        {
          id: 350,
          question: "What is 'F1-Score'?",
          options: {
            A: "A grade in a data science class.",
            B: "The harmonic mean of Precision and Recall.",
            C: "A type of racing car.",
            D: "The number of features.",
          },
          answer: "B",
          rationale:
            "F1-Score is a good single metric when you want a balance between Precision and Recall.",
        },
        {
          id: 351,
          question: "What is 'Gradient Descent'?",
          options: {
            A: "Walking down a hill.",
            B: "An optimization algorithm used to minimize the error of a model by iteratively moving toward the 'bottom'.",
            C: "A way to color a graph.",
            D: "A type of neural network.",
          },
          answer: "B",
          rationale:
            "It is the 'engine' that helps neural networks learn by adjusting weights to reduce error.",
        },
        {
          id: 352,
          question: "What is a 'Heatmap'?",
          options: {
            A: "A map showing the temperature of a room.",
            B: "A graphical representation of data where values are represented by colors.",
            C: "A server that is getting too hot.",
            D: "A way to see who is using the website.",
          },
          answer: "B",
          rationale:
            "Heatmaps are great for seeing correlations or where users click most on a page.",
        },
        {
          id: 353,
          question: "What is 'Dimensionality Reduction' (e.g., PCA)?",
          options: {
            A: "Making a 3D image 2D.",
            B: "The process of reducing the number of variables (features) while keeping the most important info.",
            C: "Deleting rows from the data.",
            D: "Compressing a file.",
          },
          answer: "B",
          rationale:
            "It helps simplify models and allows us to visualize high-dimensional data in 2D or 3D.",
        },
        {
          id: 354,
          question: "What is 'Time Series Analysis'?",
          options: {
            A: "Analyzing data that is collected over time (e.g., stock prices).",
            B: "Checking how long it takes to run a model.",
            C: "A list of history books.",
            D: "A movie about science.",
          },
          answer: "A",
          rationale:
            "Time series data is unique because the order of data points matters.",
        },
        {
          id: 355,
          question: "What is 'RMSE' (Root Mean Square Error)?",
          options: {
            A: "A measure of the average magnitude of error in a regression model.",
            B: "A way to name a model.",
            C: "The total number of rows.",
            D: "A type of visualization.",
          },
          answer: "A",
          rationale:
            "RMSE tells you, on average, how far off your predictions are in the same units as the target variable.",
        },
        {
          id: 356,
          question: "What is 'Data Ethics'?",
          options: {
            A: "The rules for writing clean code.",
            B: "The moral principles that govern the collection, analysis, and use of data.",
            C: "The speed of data processing.",
            D: "The cost of data storage.",
          },
          answer: "B",
          rationale:
            "Data ethics covers things like privacy, bias, and transparency.",
        },
        {
          id: 357,
          question: "What is a 'Box Plot' used for?",
          options: {
            A: "To show the distribution and outliers of a dataset.",
            B: "To draw a square.",
            C: "To store data in a box.",
            D: "To show the relationship between two variables.",
          },
          answer: "A",
          rationale:
            "A box plot shows the median, quartiles, and any unusual data points.",
        },
        {
          id: 358,
          question: "What is 'Scikit-Learn'?",
          options: {
            A: "A school for data scientists.",
            B: "A popular Python library for machine learning.",
            C: "A way to learn to code.",
            D: "A type of database.",
          },
          answer: "B",
          rationale:
            "Scikit-Learn provides simple and efficient tools for predictive data analysis.",
        },
        {
          id: 359,
          question: "What is 'Matplotlib' or 'Seaborn'?",
          options: {
            A: "Database libraries.",
            B: "Python libraries used for creating static, animated, and interactive visualizations.",
            C: "A type of computer hardware.",
            D: "A way to process text.",
          },
          answer: "B",
          rationale:
            "These are the go-to tools for turning numbers into charts and graphs in Python.",
        },
        {
          id: 360,
          question: "What is 'Data Leakage'?",
          options: {
            A: "A hacker stealing data.",
            B: "When information from outside the training dataset is used to create the model (leading to unrealistically good results).",
            C: "A broken database.",
            D: "Sending data to the wrong person.",
          },
          answer: "B",
          rationale:
            "Data leakage makes a model look perfect in the lab, but it will fail in the real world.",
        },
        {
          id: 361,
          question: "What is 'Feature Selection'?",
          options: {
            A: "Picking which movie to watch.",
            B: "The process of selecting the most relevant features for use in model construction.",
            C: "Deleting rows from the data.",
            D: "A way to name variables.",
          },
          answer: "B",
          rationale:
            "Removing 'noisy' or irrelevant features can actually make a model more accurate.",
        },
        {
          id: 362,
          question: "What is a 'Decision Tree'?",
          options: {
            A: "A tree that grows in a lab.",
            B: "A flowchart-like structure used for classification and regression.",
            C: "A way to decide what to eat.",
            D: "A bug in the code.",
          },
          answer: "B",
          rationale:
            "Decision trees are very easy to interpret and explain to non-technical stakeholders.",
        },
        {
          id: 363,
          question: "What is 'Ensemble Learning'?",
          options: {
            A: "Learning in a group.",
            B: "Combining the predictions of multiple models to improve overall performance.",
            C: "A way to store data.",
            D: "A type of neural network.",
          },
          answer: "B",
          rationale:
            "Ensembles (like Random Forest) are almost always more accurate than single models.",
        },
        {
          id: 364,
          question: "What is 'Data Normalization' (Scaling)?",
          options: {
            A: "Making the data look normal.",
            B: "Adjusting values to a common scale (e.g., 0 to 1) so one feature doesn't dominate the others.",
            C: "Deleting data.",
            D: "Converting text to numbers.",
          },
          answer: "B",
          rationale:
            "If one feature is 'Age' (0-100) and another is 'Income' (0-1,000,000), the model might think Income is 'more important' just because the numbers are bigger.",
        },
        {
          id: 365,
          question: "What is 'TensorFlow' or 'PyTorch'?",
          options: {
            A: "Libraries for deep learning and neural networks.",
            B: "A type of computer screen.",
            C: "A way to process text.",
            D: "A database for images.",
          },
          answer: "A",
          rationale:
            "These are the two most popular frameworks for building complex deep learning models.",
        },
        {
          id: 366,
          question: "What is 'Bagging'?",
          options: {
            A: "Putting data in a bag.",
            B: "A technique to reduce variance by training multiple models on random subsets of the data.",
            C: "A way to delete data.",
            D: "A type of neural network.",
          },
          answer: "B",
          rationale:
            "Bagging (Bootstrap Aggregating) is the 'B' in Random Forest.",
        },
        {
          id: 367,
          question: "What is 'Boosting'?",
          options: {
            A: "Making the model run faster.",
            B: "A technique to reduce bias by training models sequentially, each one trying to correct the errors of the previous one.",
            C: "A way to pay for cloud computing.",
            D: "A type of visualization.",
          },
          answer: "B",
          rationale:
            "Boosting (like XGBoost) is often the winning algorithm in data science competitions.",
        },
        {
          id: 368,
          question: "What is 'Hyperparameter Tuning'?",
          options: {
            A: "Tuning a musical instrument.",
            B: "Searching for the best settings (hyperparameters) for an algorithm to maximize performance.",
            C: "Changing the variables in the data.",
            D: "A way to name a model.",
          },
          answer: "B",
          rationale:
            "It's like fine-tuning a car engine to get the best speed.",
        },
        {
          id: 369,
          question: "What is 'Sentiment Analysis'?",
          options: {
            A: "Analyzing how a scientist feels.",
            B: "Using NLP to determine the emotional tone of a piece of text (Positive, Negative, Neutral).",
            C: "A way to see who is using the website.",
            D: "A type of visualization.",
          },
          answer: "B",
          rationale:
            "Commonly used to analyze product reviews or social media posts.",
        },
        {
          id: 370,
          question: "What is 'SQL' used for in Data Science?",
          options: {
            A: "To design websites.",
            B: "To query and extract data from relational databases.",
            C: "To build machine learning models.",
            D: "To create visualizations.",
          },
          answer: "B",
          rationale:
            "Before you can model data, you usually have to fetch it from a database using SQL.",
        },
        {
          id: 371,
          question: "What is 'Imputation'?",
          options: {
            A: "Accusing someone of a crime.",
            B: "The process of replacing missing data with substituted values (like the mean or median).",
            C: "Deleting rows with missing data.",
            D: "A way to name a model.",
          },
          answer: "B",
          rationale:
            "Imputation allows you to keep more of your data instead of throwing it all away if one column is empty.",
        },
        {
          id: 372,
          question: "What is 'Stochastic'?",
          options: {
            A: "Something that is very fast.",
            B: "Something that involves a random variable; having a random probability distribution.",
            C: "A type of database.",
            D: "A way to process text.",
          },
          answer: "B",
          rationale:
            "In 'Stochastic Gradient Descent', we use a random subset of data to speed up learning.",
        },
        {
          id: 373,
          question: "What is 'ANOVA'?",
          options: {
            A: "Analysis of Variance; a statistical method to compare the means of three or more groups.",
            B: "A new version of Python.",
            C: "A type of neural network.",
            D: "A data visualization library.",
          },
          answer: "A",
          rationale:
            "ANOVA helps you see if there is a real difference between several groups (like three different website designs).",
        },
        {
          id: 374,
          question: "What is a 'Histogram'?",
          options: {
            A: "A list of historical events.",
            B: "A visualization that shows the frequency distribution of a single numerical variable.",
            C: "A way to see who is using the website.",
            D: "A type of classification.",
          },
          answer: "B",
          rationale:
            "Histograms show you 'how many' values fall into different ranges.",
        },
        {
          id: 375,
          question: "What is 'Multi-Collinearity'?",
          options: {
            A: "When several independent variables in a model are highly correlated with each other.",
            B: "A type of database.",
            C: "A way to process text.",
            D: "A bug in the visualization.",
          },
          answer: "A",
          rationale:
            "Multi-collinearity can make it hard to tell which variable is actually affecting the result.",
        },
        {
          id: 376,
          question: "What is 'Overfitting'?",
          options: {
            A: "A model that is too simple.",
            B: "When a model learns the training data too well (including noise) and fails to generalize to new data.",
            C: "A computer that is getting too hot.",
            D: "A database that is full.",
          },
          answer: "B",
          rationale:
            "It's like a student who memorizes the practice exam but fails the real one because they didn't learn the concepts.",
        },
        {
          id: 377,
          question: "What is 'Underfitting'?",
          options: {
            A: "When a model is too simple to capture the underlying pattern of the data.",
            B: "A model that is too complex.",
            C: "A computer that is not used enough.",
            D: "A database that is empty.",
          },
          answer: "A",
          rationale:
            "Underfitting is like trying to use a straight line to predict a very curvy relationship.",
        },
        {
          id: 378,
          question: "What is 'Transfer Learning'?",
          options: {
            A: "Learning a new language.",
            B: "Taking a pre-trained model and fine-tuning it for a different, related task.",
            C: "Moving data to a new server.",
            D: "Teaching another person.",
          },
          answer: "B",
          rationale:
            "Transfer learning allows you to benefit from giant models (trained by Google/OpenAI) on your own smaller dataset.",
        },
        {
          id: 379,
          question: "What is 'Feature Scaling' (Standardization)?",
          options: {
            A: "Rescaling data to have a mean of 0 and a standard deviation of 1.",
            B: "Making the data look bigger.",
            C: "Deleting rows.",
            D: "A type of visualization.",
          },
          answer: "A",
          rationale:
            "Many algorithms (like SVM) perform much better when the data is standardized.",
        },
        {
          id: 380,
          question: "What is the 'Central Limit Theorem'?",
          options: {
            A: "The idea that with a large enough sample size, the distribution of the sample mean will be normal.",
            B: "A rule about how many people can be in a lab.",
            C: "The center of a neural network.",
            D: "A law about database speed.",
          },
          answer: "A",
          rationale:
            "This theorem is the foundation for much of classical statistics and hypothesis testing.",
        },
      ],
    },
    {
      role: "DevOps Engineer",
      focus: "CI/CD, Infrastructure, Automation, Cloud",
      flashcards: [
        {
          id: 381,
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
          id: 382,
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
          id: 383,
          question: "Which tool manages infrastructure as code?",
          options: { A: "Terraform", B: "GitHub", C: "Slack", D: "Postman" },
          answer: "A",
          rationale: "Terraform provisions infrastructure declaratively.",
        },
        {
          id: 384,
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
          id: 385,
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
        {
          id: 386,
          question: "What is the primary goal of Continuous Integration (CI)?",
          options: {
            A: "To merge code changes into a central repository frequently",
            B: "To keep code on local machines as long as possible",
            C: "To avoid testing until the end of the project",
            D: "To manually review every line of code",
          },
          answer: "A",
          rationale:
            "CI focuses on frequent merges and automated builds to catch errors early.",
        },
        {
          id: 387,
          question:
            "Which tool is an industry standard for 'Infrastructure as Code'?",
          options: { A: "Terraform", B: "Slack", C: "Photoshop", D: "Zoom" },
          answer: "A",
          rationale:
            "Terraform allows you to define and provide data center infrastructure using a declarative configuration language.",
        },
        {
          id: 388,
          question: "What does 'Canary Deployment' refer to?",
          options: {
            A: "Deploying to all users at once",
            B: "Releasing to a small subset of users first",
            C: "Deleting the database before a release",
            D: "Testing only the UI",
          },
          answer: "B",
          rationale:
            "Canary releases reduce risk by testing a new version on a small group before full rollout.",
        },
        {
          id: 389,
          question: "What is the role of a 'Load Balancer'?",
          options: {
            A: "To encrypt passwords",
            B: "To distribute incoming network traffic across multiple servers",
            C: "To write code faster",
            D: "To store images",
          },
          answer: "B",
          rationale:
            "Load balancers ensure no single server bears too much demand, improving reliability.",
        },
        {
          id: 390,
          question: "In Kubernetes, what is a 'Pod'?",
          options: {
            A: "A group of developers",
            B: "The smallest deployable unit that can contain one or more containers",
            C: "A physical server rack",
            D: "A database table",
          },
          answer: "B",
          rationale: "Pods are the fundamental execution units in Kubernetes.",
        },
        {
          id: 391,
          question: "What is the purpose of 'Docker Hub'?",
          options: {
            A: "To edit videos",
            B: "A cloud-based repository for storing and sharing Docker images",
            C: "A social network for engineers",
            D: "A compiler for Java",
          },
          answer: "B",
          rationale:
            "Docker Hub is the world's largest library and community for container images.",
        },
        {
          id: 392,
          question: "What does the term 'GitOps' imply?",
          options: {
            A: "Operating Git manually",
            B: "Using Git as the single source of truth for infrastructure and application code",
            C: "A new version of GitHub",
            D: "Writing code without version control",
          },
          answer: "B",
          rationale:
            "GitOps uses Git repositories to manage infrastructure and software deployment.",
        },
        {
          id: 393,
          question:
            "Which protocol is primarily used for secure shell access to remote servers?",
          options: { A: "HTTP", B: "FTP", C: "SSH", D: "SMTP" },
          answer: "C",
          rationale:
            "SSH (Secure Shell) provides a secure channel over an unsecured network.",
        },
        {
          id: 394,
          question: "What is 'Configuration Drift'?",
          options: {
            A: "A fast car maneuver",
            B: "When an environment's configuration changes over time from its initial documented state",
            C: "Writing code that changes color",
            D: "Using different monitors",
          },
          answer: "B",
          rationale:
            "Configuration drift often leads to 'snowflake' servers that are hard to replicate.",
        },
        {
          id: 395,
          question: "What is 'Blue-Green Deployment'?",
          options: {
            A: "Testing colors in CSS",
            B: "Running two identical production environments to reduce downtime",
            C: "Coding while underwater",
            D: "A type of database indexing",
          },
          answer: "B",
          rationale:
            "One environment (Blue) is live, while the other (Green) is prepared for the next release.",
        },
        {
          id: 396,
          question: "What is 'Chaos Engineering'?",
          options: {
            A: "Writing messy code",
            B: "Disciplined experimentation on a distributed system to build confidence in its resilience",
            C: "Not having a project manager",
            D: "Randomly deleting files to see what happens",
          },
          answer: "B",
          rationale:
            "It involves intentionally introducing failures to ensure the system can handle them.",
        },
        {
          id: 397,
          question: "What is an 'Artifact' in CI/CD?",
          options: {
            A: "A historical object",
            B: "The deployable output of a build process (e.g., a .jar or .exe file)",
            C: "A bug in the code",
            D: "A deleted server",
          },
          answer: "B",
          rationale:
            "Artifacts are the files produced during the build stage to be deployed.",
        },
        {
          id: 398,
          question: "What does YAML stand for in the context of DevOps?",
          options: {
            A: "Yet Another Markup Language",
            B: "You Are My Leader",
            C: "Yesterday's Always Much Longer",
            D: "Yearly Automated Machine Logic",
          },
          answer: "A",
          rationale:
            "YAML is a human-readable data serialization language used for config files.",
        },
        {
          id: 399,
          question: "What is 'Observability' in DevOps?",
          options: {
            A: "Watching someone code",
            B: "How well you can understand a system's internal state from its external outputs (logs, metrics, traces)",
            C: "Having a clear monitor",
            D: "Checking the weather",
          },
          answer: "B",
          rationale:
            "Observability goes beyond monitoring to help diagnose 'unknown unknowns'.",
        },
        {
          id: 400,
          question:
            "Which tool is commonly used for log management and visualization?",
          options: {
            A: "ELK Stack (Elasticsearch, Logstash, Kibana)",
            B: "Notepad",
            C: "Excel",
            D: "Spotify",
          },
          answer: "A",
          rationale:
            "ELK is the standard for searching, analyzing, and visualizing log data in real time.",
        },
        {
          id: 401,
          question: "What is a 'Webhook'?",
          options: {
            A: "A fishing tool",
            B: "An automated message sent from apps when something happens",
            C: "A hardware device",
            D: "A type of browser",
          },
          answer: "B",
          rationale:
            "Webhooks allow one application to provide real-time information to another app.",
        },
        {
          id: 402,
          question: "What is the purpose of 'Prometheus'?",
          options: {
            A: "Video editing",
            B: "Monitoring and alerting",
            C: "Storing passwords",
            D: "Writing documentation",
          },
          answer: "B",
          rationale:
            "Prometheus is a popular open-source monitoring system for cloud-native apps.",
        },
        {
          id: 403,
          question: "What is 'Serverless Computing'?",
          options: {
            A: "Coding without a computer",
            B: "A model where the cloud provider manages server infrastructure and scaling",
            C: "Running servers in your basement",
            D: "A system that doesn't use data",
          },
          answer: "B",
          rationale:
            "Developers only focus on code; the provider handles the server management (e.g., AWS Lambda).",
        },
        {
          id: 404,
          question: "What is 'DevSecOps'?",
          options: {
            A: "DevOps with extra speed",
            B: "Integrating security practices into the DevOps process",
            C: "A security guard for developers",
            D: "Buying more firewalls",
          },
          answer: "B",
          rationale:
            "It emphasizes making security a shared responsibility from the start of development.",
        },
        {
          id: 405,
          question: "Which of these is a popular CI/CD automation server?",
          options: { A: "Jenkins", B: "Paint", C: "Outlook", D: "iTunes" },
          answer: "A",
          rationale:
            "Jenkins is an open-source tool used to automate building, testing, and deploying.",
        },
        {
          id: 406,
          question: "What does 'Immutable Infrastructure' mean?",
          options: {
            A: "Infrastructure that cannot be hacked",
            B: "Infrastructure that is never modified after deployment; it is replaced if changes are needed",
            C: "Infrastructure that is very expensive",
            D: "Infrastructure that doesn't use code",
          },
          answer: "B",
          rationale:
            "Instead of patching servers, you deploy a new version to ensure consistency.",
        },
        {
          id: 407,
          question: "What is 'Linting' in a CI pipeline?",
          options: {
            A: "Removing dust from servers",
            B: "Automated checking of source code for programmatic and stylistic errors",
            C: "Compressing images",
            D: "Deleting old logs",
          },
          answer: "B",
          rationale:
            "Linters enforce coding standards and find potential bugs automatically.",
        },
        {
          id: 408,
          question: "What is the 'Sidecar Pattern' in container orchestration?",
          options: {
            A: "Two developers working together",
            B: "Deploying a helper container alongside the main application container",
            C: "A backup server in another country",
            D: "A type of UI layout",
          },
          answer: "B",
          rationale:
            "Sidecars handle peripheral tasks like logging or proxying for the main container.",
        },
        {
          id: 409,
          question: "What is an 'SLA'?",
          options: {
            A: "Software Level Access",
            B: "Service Level Agreement",
            C: "Server Logic Analysis",
            D: "System Loading Alert",
          },
          answer: "B",
          rationale:
            "An SLA is a contract between a service provider and a customer defining service standards.",
        },
        {
          id: 410,
          question: "What is 'Auto-scaling'?",
          options: {
            A: "Scaling images automatically",
            B: "Dynamically adjusting the number of computing resources based on traffic",
            C: "Automatic font sizing",
            D: "A database that never gets full",
          },
          answer: "B",
          rationale:
            "It helps manage costs and performance by matching capacity to demand.",
        },
        {
          id: 411,
          question: "What is 'Latency' in system performance?",
          options: {
            A: "The amount of data sent",
            B: "The time it takes for a data packet to travel from source to destination",
            C: "The color of the UI",
            D: "The number of users online",
          },
          answer: "B",
          rationale: "Lower latency results in a more responsive application.",
        },
        {
          id: 412,
          question: "What is 'Container Orchestration'?",
          options: {
            A: "Playing music in a container",
            B: "Managing the lifecycles of containers, including deployment and scaling",
            C: "Writing code for Docker",
            D: "Building a shipping container",
          },
          answer: "B",
          rationale:
            "Orchestrators like Kubernetes automate the management of containerized apps.",
        },
        {
          id: 413,
          question: "Which tool is used for secrets management in DevOps?",
          options: {
            A: "HashiCorp Vault",
            B: "Google Search",
            C: "Wikipedia",
            D: "Dropbox",
          },
          answer: "A",
          rationale:
            "Vault securely stores and manages access to tokens, passwords, and certificates.",
        },
        {
          id: 414,
          question: "What is 'Rolling Update'?",
          options: {
            A: "Updating code on a moving train",
            B: "Gradually replacing old version instances with new version instances",
            C: "Deleting and reinstalling everything",
            D: "Updating only the database",
          },
          answer: "B",
          rationale:
            "It allows for zero-downtime deployments by updating instances one by one.",
        },
        {
          id: 415,
          question: "What is 'Self-healing' in Kubernetes?",
          options: {
            A: "A developer taking a break",
            B: "The ability to automatically restart or replace failed containers",
            C: "Antivirus software",
            D: "A system that doesn't need electricity",
          },
          answer: "B",
          rationale:
            "Kubernetes monitors health and ensures the desired number of pods is always running.",
        },
        {
          id: 416,
          question: "What is 'Microservices Architecture'?",
          options: {
            A: "A very small server",
            B: "Building an app as a collection of small, independent, and loosely coupled services",
            C: "One giant code file",
            D: "Designing apps for microscopes",
          },
          answer: "B",
          rationale:
            "It allows teams to develop and deploy parts of an application independently.",
        },
        {
          id: 417,
          question: "What is 'Throughput'?",
          options: {
            A: "How fast you can type",
            B: "The amount of data or number of requests processed in a given time period",
            C: "The size of a hard drive",
            D: "The number of pages in a document",
          },
          answer: "B",
          rationale: "Throughput measures the processing capacity of a system.",
        },
        {
          id: 418,
          question: "What is 'Dark Launching'?",
          options: {
            A: "Releasing at night",
            B: "Deploying features to production without making them visible to users to test performance",
            C: "A hackathon",
            D: "Deleting your GitHub account",
          },
          answer: "B",
          rationale:
            "It helps test back-end stability under real load before the public launch.",
        },
        {
          id: 419,
          question: "What is 'Configuration Management'?",
          options: {
            A: "Setting up a desk",
            B: "Using tools like Ansible or Chef to automate the setup and maintenance of servers",
            C: "Managing a team of developers",
            D: "Choosing a wallpaper",
          },
          answer: "B",
          rationale:
            "It ensures that systems remain in a known, desired state.",
        },
        {
          id: 420,
          question: "What is 'High Availability' (HA)?",
          options: {
            A: "Being available for meetings",
            B: "Designing a system to be operational for a long time with minimal downtime",
            C: "Fast internet",
            D: "Having many monitors",
          },
          answer: "B",
          rationale:
            "HA systems use redundancy to survive hardware or software failures.",
        },
      ],
    },
    {
      role: "Product Manager",
      flashcards: [
        {
          id: 421,
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
          id: 422,
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
          id: 423,
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
          id: 424,
          question: "Which framework helps prioritize features?",
          options: { A: "MoSCoW", B: "Agile", C: "Scrum", D: "Kanban" },
          answer: "A",
          rationale:
            "MoSCoW categorizes features into Must, Should, Could, Won’t.",
        },
        {
          id: 425,
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
        {
          id: 426,
          question: "What is a 'Product Backlog'?",
          options: {
            A: "A list of past products",
            B: "A prioritized list of tasks, features, and fixes for a product",
            C: "A physical folder of paperwork",
            D: "The history of the company",
          },
          answer: "B",
          rationale:
            "The backlog is the single source of work for the development team.",
        },
        {
          id: 427,
          question: "What does 'Product-Market Fit' mean?",
          options: {
            A: "The product fits in a box",
            B: "The degree to which a product satisfies strong market demand",
            C: "Selling exactly one item",
            D: "Having a high stock price",
          },
          answer: "B",
          rationale:
            "It's the stage where a product's value proposition aligns perfectly with customer needs.",
        },
        {
          id: 428,
          question: "What is 'User Experience' (UX)?",
          options: {
            A: "The speed of the server",
            B: "How a user interacts with and experiences a product",
            C: "The amount of code written",
            D: "The price of the product",
          },
          answer: "B",
          rationale:
            "UX focuses on usability, accessibility, and pleasure provided in interaction.",
        },
        {
          id: 429,
          question: "What is 'GTM Strategy'?",
          options: {
            A: "Get To Money",
            B: "Go-To-Market Strategy",
            C: "General Task Management",
            D: "Great Team Meeting",
          },
          answer: "B",
          rationale:
            "GTM is the plan for how a product will reach and convince customers to buy.",
        },
        {
          id: 430,
          question: "What is a 'Stakeholder'?",
          options: {
            A: "Someone who likes steak",
            B: "Anyone with an interest or concern in the project (users, investors, execs)",
            C: "Only the developers",
            D: "The landlord of the office",
          },
          answer: "B",
          rationale:
            "Managing stakeholders is a key communication duty for PMs.",
        },
        {
          id: 431,
          question: "What is 'KPI'?",
          options: {
            A: "Key Performance Indicator",
            B: "Keep People Interested",
            C: "Knowledge Processing Interface",
            D: "Keyboard Pointing Instrument",
          },
          answer: "A",
          rationale:
            "KPIs are measurable values that demonstrate how effectively a company is achieving goals.",
        },
        {
          id: 432,
          question: "What is 'A/B Testing'?",
          options: {
            A: "Testing two versions of a product to see which performs better",
            B: "Alphabetizing the code",
            C: "Testing only two days a week",
            D: "A test for grades A and B",
          },
          answer: "A",
          rationale:
            "A/B testing uses data to decide between different design or feature options.",
        },
        {
          id: 433,
          question: "What is 'Churn Rate'?",
          options: {
            A: "How fast code is written",
            B: "The percentage of customers who stop using a service over time",
            C: "The speed of the server fans",
            D: "The rate of new hires",
          },
          answer: "B",
          rationale:
            "Churn is a critical metric for understanding customer retention.",
        },
        {
          id: 434,
          question: "What is the 'Double Diamond' in design?",
          options: {
            A: "A very expensive ring",
            B: "A framework for divergent and convergent thinking in problem-solving",
            C: "A coding pattern",
            D: "A type of database schema",
          },
          answer: "B",
          rationale:
            "It helps teams explore problems deeply before focusing on solutions.",
        },
        {
          id: 435,
          question: "What is 'Opportunity Cost'?",
          options: {
            A: "The price of a new laptop",
            B: "The value of the next best alternative given up when making a choice",
            C: "The cost of a job interview",
            D: "Paying for cloud hosting",
          },
          answer: "B",
          rationale:
            "PMs must consider what they are *not* building when they choose a feature.",
        },
        {
          id: 436,
          question: "What is a 'User Story'?",
          options: {
            A: "A biography of the user",
            B: "A small, simple description of a feature from the perspective of the end user",
            C: "A bug report",
            D: "A marketing slogan",
          },
          answer: "B",
          rationale: "Format: 'As a [user], I want [goal] so that [benefit]'.",
        },
        {
          id: 437,
          question: "What is 'Feature Creep'?",
          options: {
            A: "A bug that moves",
            B: "The excessive addition of new features that leads to complexity and delays",
            C: "Hiring too many people",
            D: "A software update at night",
          },
          answer: "B",
          rationale:
            "Feature creep often results in products that are hard to use and over budget.",
        },
        {
          id: 438,
          question: "What is 'Net Promoter Score' (NPS)?",
          options: {
            A: "A networking tool",
            B: "A metric that measures customer loyalty and likelihood to recommend",
            C: "The number of ads clicked",
            D: "The speed of the internet",
          },
          answer: "B",
          rationale: "NPS is a standard way to gauge customer satisfaction.",
        },
        {
          id: 439,
          question: "What is 'Value Proposition'?",
          options: {
            A: "The price of the product",
            B: "The specific benefit that makes a product attractive to customers",
            C: "A discount code",
            D: "The salary of the PM",
          },
          answer: "B",
          rationale: "It answers the question: 'Why should I buy this?'",
        },
        {
          id: 440,
          question: "What is the 'Jobs to be Done' (JTBD) framework?",
          options: {
            A: "A job board for developers",
            B: "A perspective that focuses on the 'job' a customer 'hires' a product to do",
            C: "A list of employee tasks",
            D: "An HR policy",
          },
          answer: "B",
          rationale:
            "It helps understand the functional and emotional needs of users.",
        },
        {
          id: 441,
          question: "What is a 'Wireframe'?",
          options: {
            A: "A physical wire structure",
            B: "A low-fidelity visual guide that represents the skeletal framework of a website",
            C: "High-quality 3D art",
            D: "A networking cable",
          },
          answer: "B",
          rationale:
            "Wireframes focus on space allocation and functionality, not aesthetics.",
        },
        {
          id: 442,
          question: "What is 'Product Vision'?",
          options: {
            A: "The PM's eyesight",
            B: "A long-term high-level goal of what the product aims to achieve",
            C: "Looking at the screen too long",
            D: "A marketing video",
          },
          answer: "B",
          rationale:
            "Vision acts as a 'North Star' for all product development.",
        },
        {
          id: 443,
          question: "What is 'Agile' in product development?",
          options: {
            A: "Being very fast at typing",
            B: "An iterative approach to project management and software development",
            C: "Working without a computer",
            D: "A specific programming language",
          },
          answer: "B",
          rationale:
            "Agile focuses on delivering value in small increments and responding to change.",
        },
        {
          id: 444,
          question: "What is 'Scrum'?",
          options: {
            A: "A messy code file",
            B: "A specific Agile framework that uses time-boxed 'sprints'",
            C: "A meeting with too many people",
            D: "A type of database",
          },
          answer: "B",
          rationale:
            "Scrum defines specific roles (Scrum Master, Product Owner) and ceremonies.",
        },
        {
          id: 445,
          question: "What is a 'Sprint'?",
          options: {
            A: "Running to work",
            B: "A short, fixed period of time (usually 2-4 weeks) to complete specific work",
            C: "A fast internet connection",
            D: "A quick code review",
          },
          answer: "B",
          rationale:
            "Sprints help teams focus on immediate goals and iterate quickly.",
        },
        {
          id: 446,
          question: "What is 'Customer Discovery'?",
          options: {
            A: "Finding a customer's address",
            B: "The process of interviewing potential users to validate assumptions",
            C: "A TV channel",
            D: "Buying a list of emails",
          },
          answer: "B",
          rationale:
            "Discovery ensures you are solving a real problem before you build.",
        },
        {
          id: 447,
          question: "What is 'Retention'?",
          options: {
            A: "Memory usage in code",
            B: "The ability of a product to keep its users over time",
            C: "Holding onto old hardware",
            D: "Saving files",
          },
          answer: "B",
          rationale:
            "High retention is often a sign of a healthy, valuable product.",
        },
        {
          id: 448,
          question: "What is 'Market Segmentation'?",
          options: {
            A: "Breaking the market into pieces",
            B: "Dividing a broad target market into subsets of consumers with common needs",
            C: "Deleting competitors",
            D: "A type of stock trading",
          },
          answer: "B",
          rationale:
            "Segmentation allows for more targeted marketing and product design.",
        },
        {
          id: 449,
          question: "What is 'TAM'?",
          options: {
            A: "Total Addressable Market",
            B: "Technical Asset Management",
            C: "Task Allocation Mode",
            D: "Time And Money",
          },
          answer: "A",
          rationale:
            "TAM represents the total revenue opportunity available for a product if it achieved 100% market share.",
        },
        {
          id: 450,
          question: "What is 'User Feedback'?",
          options: {
            A: "The sound from a microphone",
            B: "Information provided by users about their experience with a product",
            C: "A bug in the code",
            D: "Marketing data",
          },
          answer: "B",
          rationale: "Feedback is crucial for iterative improvement.",
        },
        {
          id: 451,
          question: "What is 'Competitive Analysis'?",
          options: {
            A: "Being mean to competitors",
            B: "Identifying and evaluating the strengths and weaknesses of rivals",
            C: "Copying code from others",
            D: "A race between companies",
          },
          answer: "B",
          rationale:
            "It helps PMs find gaps in the market and differentiate their product.",
        },
        {
          id: 452,
          question: "What is 'Prioritization'?",
          options: {
            A: "Doing everything at once",
            B: "Determining the order of importance of tasks or features",
            C: "Only doing the easy things",
            D: "Doing what the boss says first",
          },
          answer: "B",
          rationale:
            "PMs use frameworks like RICE or MoSCoW to prioritize objectively.",
        },
        {
          id: 453,
          question: "What is 'Product Analytics'?",
          options: {
            A: "Reading the news",
            B: "The process of analyzing how users interact with a product using data",
            C: "Counting how many products are in the warehouse",
            D: "A type of math",
          },
          answer: "B",
          rationale:
            "Tools like Mixpanel or Amplitude provide insights into user behavior.",
        },
        {
          id: 454,
          question: "What is 'User Journey Map'?",
          options: {
            A: "A GPS for users",
            B: "A visual representation of the steps a user takes to achieve a goal",
            C: "A list of websites",
            D: "A travel log",
          },
          answer: "B",
          rationale:
            "Journey maps highlight pain points and opportunities for improvement.",
        },
        {
          id: 455,
          question: "What is 'Friction' in UX?",
          options: {
            A: "A physical force",
            B: "Anything that prevents a user from accomplishing their task",
            C: "A disagreement between teams",
            D: "The price of the app",
          },
          answer: "B",
          rationale:
            "Reducing friction (like a long sign-up form) increases conversion.",
        },
        {
          id: 456,
          question: "What is 'Monetization Strategy'?",
          options: {
            A: "Making money prints",
            B: "The plan for how a product will generate revenue",
            C: "Counting coins",
            D: "Hiring an accountant",
          },
          answer: "B",
          rationale:
            "Examples include subscriptions, ads, or one-time purchases.",
        },
        {
          id: 457,
          question: "What is 'Product Discovery' vs 'Product Delivery'?",
          options: {
            A: "Finding a product vs shipping it",
            B: "Discovery is deciding *what* to build; Delivery is *how* we build it",
            C: "They are the same thing",
            D: "Discovery is for PMs, Delivery is for users",
          },
          answer: "B",
          rationale:
            "Discovery focuses on validation, while delivery focuses on execution.",
        },
        {
          id: 458,
          question: "What is a 'Prototype'?",
          options: {
            A: "The final version",
            B: "An early sample or model built to test a concept or process",
            C: "A type of engine",
            D: "A deleted feature",
          },
          answer: "B",
          rationale:
            "Prototypes allow for testing without the cost of full development.",
        },
        {
          id: 459,
          question: "What is 'Product Strategy'?",
          options: {
            A: "A list of features",
            B: "The roadmap to achieve the product vision",
            C: "How a company wins in its market",
            D: "The marketing budget",
          },
          answer: "C",
          rationale:
            "Strategy defines the choices a company makes to succeed against competition.",
        },
        {
          id: 460,
          question: "What is 'Burn Rate'?",
          options: {
            A: "How hot the computer gets",
            B: "The rate at which a company spends its capital to cover expenses before generating positive cash flow",
            C: "How fast the PM gets tired",
            D: "The speed of code compilation",
          },
          answer: "B",
          rationale: "PMs need to be aware of the runway left for development.",
        },
      ],
    },
    {
      role: "QA Engineer",
      flashcards: [
        {
          id: 461,
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
          id: 462,
          question: "Which tool is commonly used for automated UI testing?",
          options: { A: "Selenium", B: "Docker", C: "Terraform", D: "Git" },
          answer: "A",
          rationale: "Selenium automates browser testing.",
        },
        {
          id: 463,
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
          id: 464,
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
          id: 465,
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
        {
          id: 466,
          question: "What is 'Black Box Testing'?",
          options: {
            A: "Testing in the dark",
            B: "Testing without knowledge of the internal code or logic",
            C: "Testing only hardware",
            D: "Testing with a physical box",
          },
          answer: "B",
          rationale:
            "The tester only sees inputs and outputs, acting like a real user.",
        },
        {
          id: 467,
          question: "What is 'Unit Testing'?",
          options: {
            A: "Testing the whole system",
            B: "Testing individual components or functions of the code in isolation",
            C: "Testing a team of people",
            D: "Testing the internet speed",
          },
          answer: "B",
          rationale:
            "Unit tests are usually written by developers and are very fast.",
        },
        {
          id: 468,
          question: "What is 'Integration Testing'?",
          options: {
            A: "Testing how different modules or services work together",
            B: "Combining two companies",
            C: "Testing the UI color",
            D: "Hiring new testers",
          },
          answer: "A",
          rationale:
            "It ensures that interfaces between components function correctly.",
        },
        {
          id: 469,
          question: "What is 'Regression Testing'?",
          options: {
            A: "Testing new features",
            B: "Re-testing existing features after changes to ensure nothing broke",
            C: "Testing old hardware",
            D: "Testing only the database",
          },
          answer: "B",
          rationale: "Regression tests prevent 'side effects' from new code.",
        },
        {
          id: 470,
          question: "What is 'Smoke Testing'?",
          options: {
            A: "Testing with fire",
            B: "A preliminary test to ensure the most critical functions work",
            C: "Testing the server temperature",
            D: "Testing the login screen only",
          },
          answer: "B",
          rationale:
            "If the smoke test fails, the build is rejected immediately.",
        },
        {
          id: 471,
          question: "What is 'User Acceptance Testing' (UAT)?",
          options: {
            A: "Testing if the user is happy",
            B: "The final phase where actual users test the software to see if it meets their needs",
            C: "A survey",
            D: "Marketing research",
          },
          answer: "B",
          rationale: "UAT is the last step before going live.",
        },
        {
          id: 472,
          question: "What is 'Boundary Value Analysis'?",
          options: {
            A: "Testing values at the edges of input ranges",
            B: "Testing in different countries",
            C: "Testing the firewall",
            D: "A type of data backup",
          },
          answer: "A",
          rationale:
            "Errors often occur at the boundaries (e.g., testing 0, 1, 99, 100 for a 1-100 range).",
        },
        {
          id: 473,
          question: "What is 'Equivalence Partitioning'?",
          options: {
            A: "Dividing the test team into equal groups",
            B: "Dividing input data into classes that are expected to behave the same way",
            C: "A type of database split",
            D: "Equality in hiring",
          },
          answer: "B",
          rationale:
            "It reduces the number of test cases needed by testing one value from each class.",
        },
        {
          id: 474,
          question: "What is 'Static Testing'?",
          options: {
            A: "Testing without running the code (e.g., code reviews, walk-throughs)",
            B: "Testing for static electricity",
            C: "Testing a website that doesn't change",
            D: "Testing with a still image",
          },
          answer: "A",
          rationale: "It catches errors early without execution costs.",
        },
        {
          id: 475,
          question: "What is 'Dynamic Testing'?",
          options: {
            A: "Fast testing",
            B: "Testing while executing the code",
            C: "Testing with moving images",
            D: "Testing on a mobile phone",
          },
          answer: "B",
          rationale:
            "Dynamic testing checks behavior and performance during runtime.",
        },
        {
          id: 476,
          question: "What is an 'End-to-End' (E2E) Test?",
          options: {
            A: "Testing from the start of the code to the end",
            B: "Testing the entire user flow from start to finish",
            C: "A very long meeting",
            D: "Testing on two different computers",
          },
          answer: "B",
          rationale: "E2E tests simulate a complete real-world user scenario.",
        },
        {
          id: 477,
          question: "What is 'Exploratory Testing'?",
          options: {
            A: "Testing while traveling",
            B: "Simultaneous learning, test design, and test execution without a pre-set plan",
            C: "A science experiment",
            D: "Searching for bugs on Google",
          },
          answer: "B",
          rationale: "It relies on the tester's intuition and experience.",
        },
        {
          id: 478,
          question: "What is 'Stress Testing'?",
          options: {
            A: "Testing how stressed the developer is",
            B: "Testing the system beyond its normal operational capacity to find the breaking point",
            C: "A type of workout",
            D: "Running too many programs at once",
          },
          answer: "B",
          rationale:
            "It determines the stability and error handling of a system under extreme load.",
        },
        {
          id: 479,
          question: "What is 'White Box Testing'?",
          options: {
            A: "Testing on a white screen",
            B: "Testing with full knowledge of the internal code and structure",
            C: "Testing only the front-end",
            D: "A type of security test",
          },
          answer: "B",
          rationale: "It focuses on code coverage and internal paths.",
        },
        {
          id: 480,
          question: "What is a 'Bug Life Cycle'?",
          options: {
            A: "How long a bug lives in a garden",
            B: "The sequence of states a bug goes through from discovery to closure",
            C: "A science documentary",
            D: "The time it takes to fix a bug",
          },
          answer: "B",
          rationale: "Typical states: New, Assigned, Fixed, Verified, Closed.",
        },
        {
          id: 481,
          question: "What is 'Severity' vs 'Priority' in a bug report?",
          options: {
            A: "They are the same thing",
            B: "Severity is technical impact; Priority is business urgency",
            C: "Priority is technical; Severity is business",
            D: "Severity is the size of the bug",
          },
          answer: "B",
          rationale: "A typo on a home page is low severity but high priority.",
        },
        {
          id: 482,
          question: "What is 'Performance Testing'?",
          options: {
            A: "Acting in a play",
            B: "Testing responsiveness, stability, and speed under a specific workload",
            C: "Checking the CPU speed",
            D: "A race between apps",
          },
          answer: "B",
          rationale: "It includes load, stress, and volume testing.",
        },
        {
          id: 483,
          question: "What is 'Defect Density'?",
          options: {
            A: "How heavy a bug is",
            B: "The number of defects found in a software component per its size (e.g., per 1000 lines of code)",
            C: "The total number of bugs",
            D: "The thickness of the documentation",
          },
          answer: "B",
          rationale:
            "It helps identify which parts of the system are most prone to errors.",
        },
        {
          id: 484,
          question: "What is 'Alpha Testing'?",
          options: {
            A: "The first test ever done",
            B: "Internal testing done by developers and QA within the organization",
            C: "Testing by real customers",
            D: "A test for the Alpha male",
          },
          answer: "B",
          rationale:
            "Alpha testing happens before the software is released to external users.",
        },
        {
          id: 485,
          question: "What is 'Beta Testing'?",
          options: {
            A: "Testing by external users in a real-world environment",
            B: "The second test done internally",
            C: "Testing for bugs in Greek",
            D: "A test that costs money",
          },
          answer: "A",
          rationale:
            "Beta testing provides final feedback before the general release.",
        },
        {
          id: 486,
          question: "What is 'Test Automation'?",
          options: {
            A: "Testing an automatic car",
            B: "Using software to control the execution of tests and compare results",
            C: "A robot that clicks a mouse",
            D: "Automatic code writing",
          },
          answer: "B",
          rationale:
            "Automation is key for regression testing and CI/CD pipelines.",
        },
        {
          id: 487,
          question: "What is a 'Test Suite'?",
          options: {
            A: "A fancy room for testers",
            B: "A collection of test cases grouped together for a specific purpose",
            C: "A clothing brand",
            D: "A type of software license",
          },
          answer: "B",
          rationale:
            "Suites help organize testing for different modules or builds.",
        },
        {
          id: 488,
          question: "What is 'Sanity Testing'?",
          options: {
            A: "Checking if the tester is crazy",
            B: "A quick test to verify that a specific bug fix or change works",
            C: "A type of mental health check",
            D: "Testing only the UI",
          },
          answer: "B",
          rationale:
            "It’s a subset of regression testing to check specific changes.",
        },
        {
          id: 489,
          question: "What is 'Scalability Testing'?",
          options: {
            A: "Testing on a scale",
            B: "Testing if the system can handle an increasing number of users or data",
            C: "Testing different font sizes",
            D: "A type of weight test",
          },
          answer: "B",
          rationale: "It ensures the system can grow to meet future demand.",
        },
        {
          id: 490,
          question: "What is 'Accessibility Testing'?",
          options: {
            A: "Testing if you can get into the building",
            B: "Ensuring the software is usable by people with disabilities",
            C: "Testing for fast internet",
            D: "Checking if the website is online",
          },
          answer: "B",
          rationale:
            "It involves testing screen readers, keyboard navigation, and color contrast.",
        },
        {
          id: 491,
          question: "What is 'Cross-Browser Testing'?",
          options: {
            A: "Testing while browsing the web",
            B: "Ensuring an app works consistently across different browsers (Chrome, Safari, Firefox)",
            C: "Using two browsers at once",
            D: "A type of networking test",
          },
          answer: "B",
          rationale:
            "Different rendering engines can cause layout or functional issues.",
        },
        {
          id: 492,
          question: "What is 'Negative Testing'?",
          options: {
            A: "Testing with a bad attitude",
            B: "Testing the system with invalid or unexpected input to see how it handles errors",
            C: "Deleting files to see if it breaks",
            D: "Testing only the 'Cancel' button",
          },
          answer: "B",
          rationale:
            "It ensures the system doesn't crash when users make mistakes.",
        },
        {
          id: 493,
          question: "What is 'Test Coverage'?",
          options: {
            A: "How many tests you have",
            B: "The degree to which the source code has been tested",
            C: "The price of the test",
            D: "How much the QA team is paid",
          },
          answer: "B",
          rationale:
            "Higher coverage generally means lower risk of undetected bugs.",
        },
        {
          id: 494,
          question: "What is 'Ad-hoc Testing'?",
          options: {
            A: "Professional testing",
            B: "Unplanned, informal testing without any documentation",
            C: "A type of automated test",
            D: "Testing with an ad blocker",
          },
          answer: "B",
          rationale:
            "It is usually done after formal testing to find remaining bugs.",
        },
        {
          id: 495,
          question: "What is 'Security Testing'?",
          options: {
            A: "Locking the office",
            B: "Testing the system for vulnerabilities, threats, and risks",
            C: "Having a strong password",
            D: "Checking the firewall once",
          },
          answer: "B",
          rationale:
            "It protects data and ensures the system is resilient to attacks.",
        },
        {
          id: 496,
          question: "What is a 'Traceability Matrix' (RTM)?",
          options: {
            A: "A 3D movie",
            B: "A document that maps and traces user requirements with test cases",
            C: "A type of computer screen",
            D: "A mathematical formula",
          },
          answer: "B",
          rationale:
            "It ensures that all requirements are tested and nothing is missed.",
        },
        {
          id: 497,
          question: "What is 'Non-functional Testing'?",
          options: {
            A: "Testing code that doesn't work",
            B: "Testing aspects like performance, security, and usability",
            C: "Testing for bugs only",
            D: "Doing nothing",
          },
          answer: "B",
          rationale:
            "It focuses on the 'how' the system behaves rather than 'what' it does.",
        },
        {
          id: 498,
          question: "What is a 'Test Oracle'?",
          options: {
            A: "A wise tester",
            B: "A mechanism for determining whether a test has passed or failed",
            C: "A type of database",
            D: "A software company",
          },
          answer: "B",
          rationale:
            "It could be a person, a document, or another piece of software.",
        },
        {
          id: 499,
          question: "What is 'Verification' vs 'Validation'?",
          options: {
            A: "They are the same",
            B: "Verification is 'Are we building the product right?'; Validation is 'Are we building the right product?'",
            C: "Validation is technical; Verification is business",
            D: "Validation is for bugs",
          },
          answer: "B",
          rationale:
            "Verification checks process/specs; Validation checks user needs.",
        },
        {
          id: 500,
          question: "What is a 'Stub' in testing?",
          options: {
            A: "A small bug",
            B: "A piece of code that mimics the behavior of a component that isn't built yet",
            C: "The end of a code file",
            D: "A deleted user",
          },
          answer: "B",
          rationale: "Stubs provide canned answers during integration testing.",
        },
      ],
    },
    {
      role: "Mobile Developer",
      flashcards: [
        {
          id: 501,
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
          id: 502,
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
          id: 503,
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
          id: 504,
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
          id: 505,
          question: "Which database is commonly used for local mobile storage?",
          options: { A: "SQLite", B: "MongoDB", C: "PostgreSQL", D: "Redis" },
          answer: "A",
          rationale:
            "SQLite is lightweight and embedded, ideal for mobile local storage.",
        },
        {
          id: 506,
          question: "What is 'Native' mobile development?",
          options: {
            A: "Using the language specific to the platform (e.g., Swift for iOS)",
            B: "Building a website",
            C: "Using only physical hardware",
            D: "Developing in your own country",
          },
          answer: "A",
          rationale:
            "Native apps have the best performance and access to hardware features.",
        },
        {
          id: 507,
          question: "What is 'Swift'?",
          options: {
            A: "A bird",
            B: "A programming language developed by Apple for iOS/macOS",
            C: "A fast internet connection",
            D: "A database for Android",
          },
          answer: "B",
          rationale: "Swift is designed to be safe, fast, and modern.",
        },
        {
          id: 508,
          question: "What is 'Kotlin'?",
          options: {
            A: "A European country",
            B: "A modern programming language used for Android development",
            C: "A type of mobile screen",
            D: "A Google search engine",
          },
          answer: "B",
          rationale:
            "Google officially supports Kotlin as a first-class language for Android.",
        },
        {
          id: 509,
          question: "What is 'React Native'?",
          options: {
            A: "A social network",
            B: "A framework for building native apps using JavaScript and React",
            C: "A type of mobile battery",
            D: "A high-speed monitor",
          },
          answer: "B",
          rationale:
            "It allows for cross-platform development with a single codebase.",
        },
        {
          id: 510,
          question: "What is 'Flutter'?",
          options: {
            A: "A UI toolkit from Google for building cross-platform apps using Dart",
            B: "A nervous feeling",
            C: "A type of camera lens",
            D: "A social media app",
          },
          answer: "A",
          rationale:
            "Flutter uses its own rendering engine to provide high-performance UIs.",
        },
        {
          id: 511,
          question: "What is an 'APK' file?",
          options: {
            A: "Apple Package Kit",
            B: "Android Package Kit; the file format for Android apps",
            C: "A type of image",
            D: "A networking tool",
          },
          answer: "B",
          rationale:
            "It's the file you download and install on an Android device.",
        },
        {
          id: 512,
          question: "What is an 'IPA' file?",
          options: {
            A: "International Phone App",
            B: "iOS App Store Package; the file format for iPhone apps",
            C: "A type of beer",
            D: "A database format",
          },
          answer: "B",
          rationale: "It is the binary file for iOS applications.",
        },
        {
          id: 513,
          question: "What is 'Xcode'?",
          options: {
            A: "A secret code",
            B: "The Integrated Development Environment (IDE) for Apple platforms",
            C: "A type of iPhone",
            D: "A compiler for Java",
          },
          answer: "B",
          rationale: "You must use Xcode to build and submit iOS apps.",
        },
        {
          id: 514,
          question: "What is 'Android Studio'?",
          options: {
            A: "A place where Androids are made",
            B: "The official IDE for Android development",
            C: "A camera app",
            D: "A cloud storage service",
          },
          answer: "B",
          rationale: "It's based on IntelliJ IDEA and optimized for Android.",
        },
        {
          id: 515,
          question: "What is 'CocoaPods'?",
          options: {
            A: "A type of candy",
            B: "A dependency manager for Swift and Objective-C projects",
            C: "A hardware accessory",
            D: "A cloud platform",
          },
          answer: "B",
          rationale:
            "It helps developers easily include third-party libraries.",
        },
        {
          id: 516,
          question: "What is 'Gradle'?",
          options: {
            A: "A grading system",
            B: "An open-source build automation system used primarily for Android",
            C: "A type of screen protector",
            D: "A networking protocol",
          },
          answer: "B",
          rationale:
            "Gradle handles the compiling, building, and packaging of Android apps.",
        },
        {
          id: 517,
          question: "What is a 'Fragment' in Android?",
          options: {
            A: "A broken piece of code",
            B: "A reusable portion of the UI that lives inside an Activity",
            C: "A type of data backup",
            D: "A small image",
          },
          answer: "B",
          rationale: "Fragments allow for more flexible and modular UI design.",
        },
        {
          id: 518,
          question: "What is an 'Activity' in Android?",
          options: {
            A: "A workout",
            B: "A single screen with a user interface",
            C: "A log of user actions",
            D: "A background task",
          },
          answer: "B",
          rationale:
            "Activities are the entry points for interacting with a user.",
        },
        {
          id: 519,
          question: "What is 'Core Data' in iOS?",
          options: {
            A: "The most important files",
            B: "A framework for managing the model layer objects and persistent data",
            C: "The iPhone's CPU",
            D: "A cloud storage service",
          },
          answer: "B",
          rationale: "It is the primary way to store local data in iOS apps.",
        },
        {
          id: 520,
          question: "What is 'Auto Layout' in iOS?",
          options: {
            A: "Automatic coding",
            B: "A system for creating adaptive UIs that respond to screen size/orientation",
            C: "A car feature",
            D: "A type of database",
          },
          answer: "B",
          rationale: "It uses constraints to position elements on the screen.",
        },
        {
          id: 521,
          question: "What is 'Push Notification'?",
          options: {
            A: "Pushing a button",
            B: "A message sent from a server to a mobile device even when the app isn't active",
            C: "A physical alarm",
            D: "A type of email",
          },
          answer: "B",
          rationale:
            "They are vital for user engagement and real-time updates.",
        },
        {
          id: 522,
          question: "What is 'App Store Connect'?",
          options: {
            A: "A social network for apps",
            B: "The portal for managing and submitting apps to the Apple App Store",
            C: "A charging cable",
            D: "A type of internet connection",
          },
          answer: "B",
          rationale:
            "It's used for analytics, metadata, and release management.",
        },
        {
          id: 523,
          question: "What is 'Google Play Console'?",
          options: {
            A: "A gaming console",
            B: "The portal for managing and publishing apps to the Google Play Store",
            C: "A search tool",
            D: "A browser",
          },
          answer: "B",
          rationale:
            "It provides tools for testing, releasing, and monitoring Android apps.",
        },
        {
          id: 524,
          question: "What is 'Deep Linking'?",
          options: {
            A: "A very long link",
            B: "A URL that opens a specific page within a mobile app",
            C: "Linking to the dark web",
            D: "A database connection",
          },
          answer: "B",
          rationale:
            "It improves user experience by taking them directly to relevant content.",
        },
        {
          id: 525,
          question: "What is 'WebView'?",
          options: {
            A: "A view of the ocean",
            B: "A component that displays web content inside a mobile app",
            C: "A type of browser",
            D: "A high-quality image",
          },
          answer: "B",
          rationale:
            "WebView is often used to show legacy web pages or hybrid content.",
        },
        {
          id: 526,
          question: "What is 'App Lifecycle'?",
          options: {
            A: "How long an app stays on the store",
            B: "The various states an app goes through (active, inactive, background, killed)",
            C: "A biology project",
            D: "The time it takes to code an app",
          },
          answer: "B",
          rationale:
            "Developers must handle transitions to save data or stop background tasks.",
        },
        {
          id: 527,
          question: "What is 'Provisioning Profile' in iOS?",
          options: {
            A: "A user's bio",
            B: "A digital entity that links developers and devices to allow testing on real hardware",
            C: "A type of database",
            D: "A marketing document",
          },
          answer: "B",
          rationale:
            "Without it, you cannot run your app on a physical iPhone.",
        },
        {
          id: 528,
          question: "What is 'Jetpack Compose'?",
          options: {
            A: "A tool for flying",
            B: "Android's modern toolkit for building native UI using a declarative approach",
            C: "A type of battery",
            D: "A music app",
          },
          answer: "B",
          rationale: "It simplifies UI development by using less code.",
        },
        {
          id: 529,
          question: "What is 'TestFlight'?",
          options: {
            A: "Testing on a plane",
            B: "Apple's tool for beta testing apps before release",
            C: "A flight simulator",
            D: "A high-speed test",
          },
          answer: "B",
          rationale: "It allows up to 10,000 external testers to try your app.",
        },
        {
          id: 530,
          question: "What is 'SharedPreferences' in Android?",
          options: {
            A: "Sharing your photos",
            B: "A way to store small amounts of primitive data as key-value pairs",
            C: "Public folders",
            D: "A type of UI layout",
          },
          answer: "B",
          rationale:
            "It is commonly used for settings and simple user preferences.",
        },
        {
          id: 531,
          question: "What is 'Firebase' in mobile dev?",
          options: {
            A: "A fire extinguisher",
            B: "A platform by Google providing backend services like database, auth, and analytics",
            C: "A new smartphone",
            D: "A type of programming language",
          },
          answer: "B",
          rationale:
            "Firebase is very popular for rapid mobile app development.",
        },
        {
          id: 532,
          question: "What is 'Delegate Pattern' in iOS?",
          options: {
            A: "A type of voting",
            B: "A design pattern where one object acts on behalf of or in coordination with another",
            C: "A deleted code file",
            D: "A marketing strategy",
          },
          answer: "B",
          rationale:
            "It is widely used for handling UI events (e.g., TableView delegates).",
        },
        {
          id: 533,
          question: "What is 'Interface Builder'?",
          options: {
            A: "Building a computer",
            B: "A visual tool within Xcode for designing UIs",
            C: "A job title",
            D: "A type of keyboard",
          },
          answer: "B",
          rationale: "It allows developers to drag and drop UI elements.",
        },
        {
          id: 534,
          question: "What is 'View Model' (MVVM)?",
          options: {
            A: "A 3D model",
            B: "A component that acts as a bridge between the Model and the View",
            C: "A type of camera",
            D: "A job for models",
          },
          answer: "B",
          rationale:
            "MVVM is a popular architecture for separating business logic from UI.",
        },
        {
          id: 535,
          question: "What is 'Responsive Design' in mobile?",
          options: {
            A: "A fast app",
            B: "An approach where the UI adjusts gracefully to different screen sizes and orientations",
            C: "An app that talks back",
            D: "A bright screen",
          },
          answer: "B",
          rationale:
            "Crucial for supporting phones, tablets, and foldable devices.",
        },
        {
          id: 536,
          question: "What is 'In-App Purchase' (IAP)?",
          options: {
            A: "Buying a phone",
            B: "Buying digital goods or services within a mobile application",
            C: "Ordering pizza",
            D: "Buying a subscription on a website",
          },
          answer: "B",
          rationale:
            "IAPs are a major source of revenue for mobile developers.",
        },
        {
          id: 537,
          question: "What is 'App Indexing'?",
          options: {
            A: "A list of apps",
            B: "Allowing mobile app content to appear in search engine results",
            C: "Counting apps",
            D: "A type of database index",
          },
          answer: "B",
          rationale: "It helps drive organic traffic to your app.",
        },
        {
          id: 538,
          question: "What is 'Asset Catalog' in iOS?",
          options: {
            A: "A list of property",
            B: "A way to manage images, icons, and colors in an organized way",
            C: "A catalog for shopping",
            D: "A type of database",
          },
          answer: "B",
          rationale:
            "It handles different resolutions (1x, 2x, 3x) automatically.",
        },
        {
          id: 539,
          question: "What is 'Obfuscation'?",
          options: {
            A: "Making things clear",
            B: "Making the code difficult for humans to read to protect intellectual property",
            C: "A type of bug",
            D: "Adding comments",
          },
          answer: "B",
          rationale:
            "Tools like ProGuard/R8 obfuscate Android code to deter reverse engineering.",
        },
        {
          id: 540,
          question: "What is a 'Sandbox' in mobile apps?",
          options: {
            A: "A place for kids",
            B: "A security mechanism that isolates an app from the rest of the system",
            C: "A type of hardware",
            D: "A cloud server",
          },
          answer: "B",
          rationale:
            "It prevents malicious apps from accessing other apps' data.",
        },
      ],
    },
    {
      role: "Systems Analyst",
      flashcards: [
        {
          id: 541,
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
          id: 542,
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
          id: 543,
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
          id: 544,
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
          id: 545,
          question:
            "Which methodology emphasizes iterative development and stakeholder feedback?",
          options: { A: "Waterfall", B: "Agile", C: "V-Model", D: "Spiral" },
          answer: "B",
          rationale:
            "Agile focuses on iterative cycles and continuous stakeholder collaboration.",
        },
        {
          id: 546,
          question: "What is 'Requirement Gathering'?",
          options: {
            A: "Buying hardware",
            B: "The process of identifying and documenting what the system must do",
            C: "Cleaning the office",
            D: "Hiring developers",
          },
          answer: "B",
          rationale: "This is the foundation of any successful system project.",
        },
        {
          id: 547,
          question: "What is a 'Business Requirement Document' (BRD)?",
          options: {
            A: "A financial report",
            B: "A high-level document describing the business goals and needs",
            C: "A marketing plan",
            D: "A list of code files",
          },
          answer: "B",
          rationale:
            "The BRD explains *why* the project is being done from a business perspective.",
        },
        {
          id: 548,
          question: "What is 'UML'?",
          options: {
            A: "Universal Markup Language",
            B: "Unified Modeling Language; used for visualizing system design",
            C: "United Mobile Logic",
            D: "User Management List",
          },
          answer: "B",
          rationale:
            "UML provides a standard set of diagrams for software engineering.",
        },
        {
          id: 549,
          question: "What is a 'Sequence Diagram'?",
          options: {
            A: "A list of numbers",
            B: "A UML diagram showing how objects interact in a specific time order",
            C: "A photo of the team",
            D: "A type of database",
          },
          answer: "B",
          rationale:
            "It is useful for understanding the flow of a specific use case.",
        },
        {
          id: 550,
          question: "What is 'Stakeholder Interviewing'?",
          options: {
            A: "A job interview",
            B: "A technique to elicit requirements by talking directly to users/owners",
            C: "A performance review",
            D: "A press conference",
          },
          answer: "B",
          rationale:
            "Direct communication helps uncover hidden needs and constraints.",
        },
        {
          id: 551,
          question: "What is an 'Entity Relationship Diagram' (ERD)?",
          options: {
            A: "A family tree",
            B: "A diagram representing the data structure and relationships in a database",
            C: "A networking map",
            D: "A company hierarchy",
          },
          answer: "B",
          rationale:
            "Analysts use ERDs to design the logic of the system's data.",
        },
        {
          id: 552,
          question: "What is a 'Prototype' in systems analysis?",
          options: {
            A: "The finished product",
            B: "A preliminary version of the system to gather early feedback",
            C: "A deleted feature",
            D: "A hardware test",
          },
          answer: "B",
          rationale:
            "Prototyping reduces the risk of building the wrong system.",
        },
        {
          id: 553,
          question: "What is 'Scope Creep'?",
          options: {
            A: "Looking through a telescope",
            B: "When a project's requirements grow uncontrollably without adjustments to time/budget",
            C: "Hiring too many analysts",
            D: "A slow computer",
          },
          answer: "B",
          rationale: "Managing scope is one of the analyst's hardest tasks.",
        },
        {
          id: 554,
          question: "What is a 'Functional Requirement'?",
          options: {
            A: "Something that works",
            B: "A requirement that specifies what the system should do (e.g., 'system shall send email')",
            C: "A high-speed server",
            D: "A beautiful design",
          },
          answer: "B",
          rationale:
            "Functional requirements define the core behaviors of the system.",
        },
        {
          id: 555,
          question: "What is a 'Non-functional Requirement'?",
          options: {
            A: "A broken feature",
            B: "A requirement specifying criteria to judge system operation (e.g., speed, security)",
            C: "An optional task",
            D: "Marketing data",
          },
          answer: "B",
          rationale: "These define the 'quality' of the system.",
        },
        {
          id: 556,
          question: "What is 'Gap Analysis'?",
          options: {
            A: "Looking at space",
            B: "A comparison of current system performance with desired future performance",
            C: "Measuring the distance between desks",
            D: "A dental checkup",
          },
          answer: "B",
          rationale: "It helps identify what needs to be built or changed.",
        },
        {
          id: 557,
          question: "What is 'SDLC'?",
          options: {
            A: "Software Design Logic Center",
            B: "Software Development Life Cycle",
            C: "System Data Loading Code",
            D: "Simple Data Life Cycle",
          },
          answer: "B",
          rationale:
            "It is the process used by the industry to design, develop, and test high-quality software.",
        },
        {
          id: 558,
          question: "What is the 'Waterfall Model'?",
          options: {
            A: "A beautiful river",
            B: "A linear, sequential approach to the SDLC",
            C: "A type of database",
            D: "Fast coding",
          },
          answer: "B",
          rationale:
            "Requirements must be fully finished before design begins.",
        },
        {
          id: 559,
          question: "What is 'Context Diagram'?",
          options: {
            A: "A summary of a book",
            B: "A high-level Data Flow Diagram showing the system as a whole and its external actors",
            C: "A zoom-in on code",
            D: "A marketing image",
          },
          answer: "B",
          rationale: "It defines the boundaries of the system.",
        },
        {
          id: 560,
          question: "What is 'Feasibility Study'?",
          options: {
            A: "A study on how to be famous",
            B: "An assessment of the practicality of a proposed project",
            C: "Buying new tools",
            D: "A history of old projects",
          },
          answer: "B",
          rationale:
            "It answers: 'Can we build this?' and 'Should we build this?'",
        },
        {
          id: 561,
          question: "What is 'Business Process Modeling' (BPM)?",
          options: {
            A: "Building a scale model",
            B: "Representing processes of an enterprise so they may be analyzed and improved",
            C: "Modeling clothes for a brand",
            D: "A type of math",
          },
          answer: "B",
          rationale:
            "Analysts use this to understand how the business works *now*.",
        },
        {
          id: 562,
          question: "What is 'User Acceptance'?",
          options: {
            A: "A user liking a post",
            B: "The process of ensuring the system meets user needs and they agree to use it",
            C: "A user manual",
            D: "Hiring users",
          },
          answer: "B",
          rationale: "The analyst often coordinates the final checks by users.",
        },
        {
          id: 563,
          question: "What is an 'Interface Specification'?",
          options: {
            A: "A list of monitors",
            B: "A document defining how the system interacts with other systems or hardware",
            C: "A design for a website",
            D: "A networking cable",
          },
          answer: "B",
          rationale:
            "It prevents communication errors between different parts of a tech stack.",
        },
        {
          id: 564,
          question: "What is 'JAD' (Joint Application Development)?",
          options: {
            A: "A programming language",
            B: "A process that brings together users, managers, and analysts in a workshop",
            C: "A type of database",
            D: "A security protocol",
          },
          answer: "B",
          rationale: "JAD sessions speed up the requirement gathering process.",
        },
        {
          id: 565,
          question: "What is 'Legacy System'?",
          options: {
            A: "A very new system",
            B: "An old or outdated system that is still in use by an organization",
            C: "A system that was inherited",
            D: "A high-quality system",
          },
          answer: "B",
          rationale:
            "Analysts often have to figure out how to integrate new tech with legacy systems.",
        },
        {
          id: 566,
          question: "What is 'System Migration'?",
          options: {
            A: "Systems moving south for winter",
            B: "The process of moving from an old system to a new system",
            C: "Deleting data",
            D: "A type of backup",
          },
          answer: "B",
          rationale:
            "Migration is complex and requires careful planning and testing.",
        },
        {
          id: 567,
          question: "What is 'Decision Table'?",
          options: {
            A: "A table for meetings",
            B: "A tool for documenting complex business logic and rules",
            C: "A type of database",
            D: "A list of employees",
          },
          answer: "B",
          rationale:
            "It helps ensure that all possible combinations of conditions are considered.",
        },
        {
          id: 568,
          question: "What is 'CASE' tools?",
          options: {
            A: "Briefcases for analysts",
            B: "Computer-Aided Software Engineering tools",
            C: "Tools for testing",
            D: "Hardware repair kits",
          },
          answer: "B",
          rationale:
            "These tools help automate system analysis and design tasks.",
        },
        {
          id: 569,
          question: "What is 'Workflow Analysis'?",
          options: {
            A: "Analyzing how much people work",
            B: "The study of the flow of work from start to finish within a process",
            C: "A type of performance review",
            D: "Cleaning up a messy office",
          },
          answer: "B",
          rationale:
            "It helps find bottlenecks and inefficiencies in a business process.",
        },
        {
          id: 570,
          question: "What is 'Risk Management' in systems analysis?",
          options: {
            A: "Avoiding all risks",
            B: "The process of identifying, assessing, and controlling threats to a project",
            C: "An insurance policy",
            D: "A safety manual",
          },
          answer: "B",
          rationale:
            "Analysts must identify technical and business risks early on.",
        },
        {
          id: 571,
          question: "What is 'Traceability'?",
          options: {
            A: "Tracing an image",
            B: "The ability to link requirements back to business goals and forward to tests",
            C: "A type of networking tool",
            D: "Drawing a map",
          },
          answer: "B",
          rationale:
            "It ensures that every requirement is fulfilled and tested.",
        },
        {
          id: 572,
          question: "What is a 'Data Dictionary'?",
          options: {
            A: "A book of tech words",
            B: "A centralized repository of information about data (meanings, relationships, origin)",
            C: "A type of database",
            D: "A list of passwords",
          },
          answer: "B",
          rationale:
            "It ensures everyone on the project uses the same definitions for data.",
        },
        {
          id: 573,
          question: "What is 'Operational Feasibility'?",
          options: {
            A: "Can the system be built?",
            B: "Will the system be used and accepted by the people it's intended for?",
            C: "Is there enough money?",
            D: "Is it legal?",
          },
          answer: "B",
          rationale:
            "A perfect system is a failure if users refuse to work with it.",
        },
        {
          id: 574,
          question: "What is 'Economic Feasibility'?",
          options: {
            A: "Can we build it?",
            B: "Is the project cost-effective and does it provide a good ROI?",
            C: "Is the code efficient?",
            D: "Does it follow laws?",
          },
          answer: "B",
          rationale: "Also known as a Cost-Benefit Analysis.",
        },
        {
          id: 575,
          question: "What is 'Technical Feasibility'?",
          options: {
            A: "Does the team have the skills and tools to build the system?",
            B: "Is it cheap?",
            C: "Is it legal?",
            D: "Will users like it?",
          },
          answer: "A",
          rationale: "It assesses the available technology and expertise.",
        },
        {
          id: 576,
          question: "What is 'Change Management'?",
          options: {
            A: "Changing your password",
            B: "The process of supporting individuals and teams as they move to a new system",
            C: "Changing the code",
            D: "Hiring a new manager",
          },
          answer: "B",
          rationale:
            "The human side of system implementation is crucial for success.",
        },
        {
          id: 577,
          question: "What is 'Pilot Implementation'?",
          options: {
            A: "Flying a plane",
            B: "Releasing the new system to a small part of the organization first",
            C: "Testing the system once",
            D: "A fast release",
          },
          answer: "B",
          rationale:
            "It limits the impact of any errors and allows for final adjustments.",
        },
        {
          id: 578,
          question: "What is 'Parallel Implementation'?",
          options: {
            A: "Running two systems at once",
            B: "Running both the old and new system simultaneously for a period",
            C: "Doing two projects at once",
            D: "A type of networking",
          },
          answer: "B",
          rationale:
            "It's the safest but most expensive way to switch systems.",
        },
        {
          id: 579,
          question: "What is 'Direct Cutover'?",
          options: {
            A: "Stopping the old system and starting the new one immediately",
            B: "Cutting cables",
            C: "A type of surgery",
            D: "A gradual change",
          },
          answer: "A",
          rationale:
            "High risk, low cost; no fallback if the new system fails.",
        },
        {
          id: 580,
          question: "What is 'User Manual'?",
          options: {
            A: "A book on how to be a person",
            B: "A document that explains how to use the system",
            C: "A technical specification",
            D: "A marketing flyer",
          },
          answer: "B",
          rationale:
            "Analysts ensure that users have clear instructions for the new software.",
        },
      ],
    },
    {
      role: "AI Engineer",
      focus: "Machine Learning, Neural Networks, NLP, Data Science",
      flashcards: [
        {
          id: 581,
          question: "What is 'Supervised Learning'?",
          options: {
            A: "Learning with a teacher watching you",
            B: "Training a model on labeled data where the answer is known",
            C: "Letting a model find patterns on its own",
            D: "Programming every rule manually",
          },
          answer: "B",
          rationale:
            "Supervised learning uses input-output pairs to learn a mapping function.",
        },
        {
          id: 582,
          question: "What is 'Unsupervised Learning'?",
          options: {
            A: "Training without any data",
            B: "Finding hidden patterns or structures in unlabeled data",
            C: "A model that doesn't need a computer",
            D: "Manual data entry",
          },
          answer: "B",
          rationale:
            "It is used for clustering and association without predefined labels.",
        },
        {
          id: 583,
          question: "What is a 'Neural Network'?",
          options: {
            A: "A group of people thinking",
            B: "A series of algorithms that mimic the operations of a human brain to recognize relationships in data",
            C: "A social media platform",
            D: "A type of internet router",
          },
          answer: "B",
          rationale: "Neural networks are the backbone of deep learning.",
        },
        {
          id: 584,
          question: "In AI, what does 'NLP' stand for?",
          options: {
            A: "Natural Language Processing",
            B: "Neural Logic Programming",
            C: "Network Layer Protocol",
            D: "Node Location Process",
          },
          answer: "A",
          rationale:
            "NLP focuses on the interaction between computers and human language.",
        },
        {
          id: 585,
          question: "What is 'Overfitting'?",
          options: {
            A: "When a model is too small",
            B: "When a model learns the training data too well, including the noise, and performs poorly on new data",
            C: "When a model is too fast",
            D: "Buying too much hardware",
          },
          answer: "B",
          rationale: "Overfit models lack generalization to unseen data.",
        },
        {
          id: 586,
          question: "What is 'Underfitting'?",
          options: {
            A: "When a model is too complex",
            B: "When a model is too simple to capture the underlying trend of the data",
            C: "Wearing small clothes",
            D: "Not having enough RAM",
          },
          answer: "B",
          rationale:
            "Underfitting occurs when the model cannot learn the relationship in the training data.",
        },
        {
          id: 587,
          question:
            "Which of these is a common activation function in Neural Networks?",
          options: { A: "ReLU", B: "HTTP", C: "SQL", D: "JSON" },
          answer: "A",
          rationale:
            "ReLU (Rectified Linear Unit) is widely used to introduce non-linearity.",
        },
        {
          id: 588,
          question: "What is a 'Tensor'?",
          options: {
            A: "A feeling of stress",
            B: "A multi-dimensional array of numbers",
            C: "A type of database",
            D: "A brand of laptop",
          },
          answer: "B",
          rationale:
            "Tensors are the fundamental data structures used in frameworks like TensorFlow.",
        },
        {
          id: 589,
          question: "What is 'Computer Vision'?",
          options: {
            A: "Having good eyesight",
            B: "A field of AI that trains computers to interpret and understand the visual world",
            C: "A type of monitor",
            D: "Video editing software",
          },
          answer: "B",
          rationale:
            "It involves analyzing digital images and videos to identify objects.",
        },
        {
          id: 590,
          question: "What is the 'Bias-Variance Tradeoff'?",
          options: {
            A: "Trading stocks",
            B: "The conflict between trying to minimize error from bias and error from variance",
            C: "A fair way to hire people",
            D: "Choosing between Python and R",
          },
          answer: "B",
          rationale:
            "It is the central challenge in finding a model that generalizes well.",
        },
        {
          id: 591,
          question: "Which framework is developed by Meta (Facebook) for AI?",
          options: { A: "TensorFlow", B: "PyTorch", C: "Django", D: "Angular" },
          answer: "B",
          rationale:
            "PyTorch is a very popular open-source machine learning library.",
        },
        {
          id: 592,
          question: "Which framework is developed by Google for AI?",
          options: {
            A: "React",
            B: "TensorFlow",
            C: "Flask",
            D: "Ruby on Rails",
          },
          answer: "B",
          rationale:
            "TensorFlow is an end-to-end platform for machine learning.",
        },
        {
          id: 593,
          question: "What is 'Reinforcement Learning'?",
          options: {
            A: "Learning through rewards and penalties",
            B: "Studying hard for a test",
            C: "Fixing a broken model",
            D: "Programming rules into a system",
          },
          answer: "A",
          rationale:
            "An agent learns to make decisions by performing actions in an environment to maximize cumulative reward.",
        },
        {
          id: 594,
          question: "What is a 'Loss Function'?",
          options: {
            A: "A function that deletes data",
            B: "A mathematical way of measuring how wrong the model's predictions are",
            C: "A way to save money",
            D: "A bug in the code",
          },
          answer: "B",
          rationale:
            "The goal of training is to minimize the loss function value.",
        },
        {
          id: 595,
          question: "What is 'Backpropagation'?",
          options: {
            A: "Going back to an old version of code",
            B: "The central algorithm for training neural networks by calculating gradients",
            C: "A type of data backup",
            D: "Reversing the order of a list",
          },
          answer: "B",
          rationale:
            "It propagates the error backward through the network to update weights.",
        },
        {
          id: 596,
          question: "What is a 'Hyperparameter'?",
          options: {
            A: "A very fast parameter",
            B: "A configuration setting external to the model whose value cannot be estimated from data",
            C: "A type of variable in Python",
            D: "The size of the dataset",
          },
          answer: "B",
          rationale:
            "Examples include learning rate, batch size, and number of layers.",
        },
        {
          id: 597,
          question: "What is 'Transfer Learning'?",
          options: {
            A: "Moving files to a new computer",
            B: "Applying knowledge from one task to a different but related task",
            C: "Learning while traveling",
            D: "A type of school transfer",
          },
          answer: "B",
          rationale:
            "It allows models to be trained faster with less data by using pre-trained weights.",
        },
        {
          id: 598,
          question: "What is a 'Large Language Model' (LLM)?",
          options: {
            A: "A dictionary",
            B: "AI models trained on massive amounts of text to generate and understand human-like language",
            C: "A very long document",
            D: "A translation software",
          },
          answer: "B",
          rationale: "Examples include GPT-4, Claude, and Llama.",
        },
        {
          id: 599,
          question: "What is 'Data Augmentation'?",
          options: {
            A: "Buying more data",
            B: "Creating new training data from existing data using transformations like flipping or rotating",
            C: "Deleting bad data",
            D: "Changing the file format",
          },
          answer: "B",
          rationale:
            "It helps prevent overfitting by increasing the diversity of the training set.",
        },
        {
          id: 600,
          question: "What is a 'Confusion Matrix'?",
          options: {
            A: "A difficult math problem",
            B: "A table used to evaluate the performance of a classification model",
            C: "A messy database",
            D: "A type of neural network",
          },
          answer: "B",
          rationale:
            "It shows true positives, true negatives, false positives, and false negatives.",
        },
        {
          id: 601,
          question: "What is 'Feature Engineering'?",
          options: {
            A: "Building a car",
            B: "Selecting and transforming raw data into meaningful inputs for a model",
            C: "Fixing a bug",
            D: "Designing a UI",
          },
          answer: "B",
          rationale:
            "Good features often matter more than the algorithm itself.",
        },
        {
          id: 602,
          question: "What is 'Epoch' in AI training?",
          options: {
            A: "A period in history",
            B: "One full pass of the entire training dataset through the neural network",
            C: "A type of computer",
            D: "A very fast calculation",
          },
          answer: "B",
          rationale:
            "Models are typically trained over many epochs to improve accuracy.",
        },
        {
          id: 603,
          question: "What is 'Gradient Descent'?",
          options: {
            A: "Going down a hill",
            B: "An optimization algorithm used to minimize the loss function",
            C: "A type of sorting algorithm",
            D: "Decreasing the internet speed",
          },
          answer: "B",
          rationale:
            "It iteratively moves toward the global minimum of the loss function.",
        },
        {
          id: 604,
          question: "What is an 'Encoder-Decoder' architecture?",
          options: {
            A: "A secret code machine",
            B: "A model structure where one part processes input and another generates output",
            C: "A type of hardware",
            D: "A compression tool",
          },
          answer: "B",
          rationale: "Commonly used in machine translation and summarization.",
        },
        {
          id: 605,
          question: "What is 'Generative AI'?",
          options: {
            A: "AI that can generate electricity",
            B: "AI that can create new content like text, images, or audio",
            C: "AI that is very smart",
            D: "A type of search engine",
          },
          answer: "B",
          rationale: "It creates new data that resembles the training data.",
        },
        {
          id: 606,
          question: "What is 'Tokenization'?",
          options: {
            A: "Giving someone a coin",
            B: "Breaking text down into smaller units like words or subwords",
            C: "Encrypting a password",
            D: "Deleting spaces in a file",
          },
          answer: "B",
          rationale: "Tokenization is a fundamental step in NLP preprocessing.",
        },
        {
          id: 607,
          question: "What is a 'CNN' (Convolutional Neural Network)?",
          options: {
            A: "A news channel",
            B: "A neural network type specifically designed for processing structured arrays of data, like images",
            C: "A type of cable",
            D: "A computer network",
          },
          answer: "B",
          rationale:
            "CNNs are highly effective for image recognition and classification.",
        },
        {
          id: 608,
          question: "What is an 'RNN' (Recurrent Neural Network)?",
          options: {
            A: "A repeating sequence",
            B: "A neural network designed for sequential data where the output depends on previous inputs",
            C: "A network that runs backwards",
            D: "A fast internet connection",
          },
          answer: "B",
          rationale:
            "RNNs are often used for time series and language modeling.",
        },
        {
          id: 609,
          question: "What is 'Inference' in AI?",
          options: {
            A: "Gathering data",
            B: "The process of using a trained model to make predictions on new data",
            C: "Training the model",
            D: "Deleting the model",
          },
          answer: "B",
          rationale:
            "Inference is the 'production' stage where the model is actually used.",
        },
        {
          id: 610,
          question: "What is 'Stochastic Gradient Descent' (SGD)?",
          options: {
            A: "A random hill",
            B: "A variation of gradient descent that updates weights using only a single or small batch of samples",
            C: "A type of weather",
            D: "A fast computer",
          },
          answer: "B",
          rationale: "SGD is often faster and can help avoid local minima.",
        },
        {
          id: 611,
          question: "What is 'Regularization'?",
          options: {
            A: "Making code look nice",
            B: "Techniques used to prevent overfitting by adding a penalty to the loss function",
            C: "Cleaning the data",
            D: "Setting a regular schedule",
          },
          answer: "B",
          rationale: "L1 and L2 are common types of regularization.",
        },
        {
          id: 612,
          question: "What is an 'Attention Mechanism'?",
          options: {
            A: "Paying attention in class",
            B: "A technique that allows a model to focus on specific parts of the input when producing output",
            C: "A loud noise",
            D: "A bright light on a screen",
          },
          answer: "B",
          rationale:
            "It is the core innovation behind the Transformer architecture.",
        },
        {
          id: 613,
          question: "What is a 'Transformer' in AI?",
          options: {
            A: "A toy robot",
            B: "An architecture that uses self-attention and has become the standard for NLP",
            C: "An electrical device",
            D: "A data converter",
          },
          answer: "B",
          rationale:
            "Transformers enable parallel processing of text, unlike RNNs.",
        },
        {
          id: 614,
          question: "What is 'Fine-tuning'?",
          options: {
            A: "Fixing a musical instrument",
            B: "Taking a pre-trained model and training it further on a specific dataset",
            C: "Cleaning the hardware",
            D: "Writing new code",
          },
          answer: "B",
          rationale: "It adapts a general model for a specialized task.",
        },
        {
          id: 615,
          question: "What is 'Precision' in classification?",
          options: {
            A: "Being very careful",
            B: "The ratio of true positive predictions to the total number of positive predictions made",
            C: "The speed of the model",
            D: "The size of the data",
          },
          answer: "B",
          rationale:
            "Precision answers: 'Of all instances predicted as positive, how many were actually positive?'",
        },
        {
          id: 616,
          question: "What is 'Recall' in classification?",
          options: {
            A: "Remembering a fact",
            B: "The ratio of true positive predictions to the total number of actual positive instances",
            C: "Deleting a model",
            ed: "A type of memory",
          },
          answer: "B",
          rationale:
            "Recall answers: 'Of all the actual positive instances, how many did we catch?'",
        },
        {
          id: 617,
          question: "What is 'F1 Score'?",
          options: {
            A: "A racing car",
            B: "The harmonic mean of Precision and Recall",
            C: "A high score in a game",
            D: "A type of database",
          },
          answer: "B",
          rationale:
            "It provides a single metric that balances both precision and recall.",
        },
        {
          id: 618,
          question: "What is 'Clustering'?",
          options: {
            A: "Grouping people together",
            B: "An unsupervised task of grouping similar data points together",
            C: "A type of database",
            D: "A social event",
          },
          answer: "B",
          rationale: "K-Means is a popular algorithm for clustering.",
        },
        {
          id: 619,
          question: "What is 'Dimensionality Reduction'?",
          options: {
            A: "Making a model smaller",
            B: "Reducing the number of input variables in a dataset (e.g., PCA)",
            C: "Compressing a file",
            D: "Deleting old data",
          },
          answer: "B",
          rationale:
            "It helps visualize high-dimensional data and can improve model performance.",
        },
        {
          id: 620,
          question: "What is 'Turing Test'?",
          options: {
            A: "A driving test",
            B: "A test of a machine's ability to exhibit intelligent behavior indistinguishable from a human",
            C: "A math exam",
            D: "A hardware benchmark",
          },
          answer: "B",
          rationale:
            "Proposed by Alan Turing in 1950, it remains a famous conceptual benchmark for AI.",
        },
      ],
    },
  ],
];

export default QUESTIONS_DATA;
