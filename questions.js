const questions = [
  {
    'id': 1,
    'question': 'What is the supreme law of the land?',
    'answer': 'The Constitution',
    'choices': [
        'The Supreme Court',
        'The Bill of Rights',
        'The Declaration of Independence',
        'The Constitution'
    ],
    'topic': 'American Government',
    'subTopic': 'Principles of American Democracy'
  },
  {
    'id': 2,
    'question': 'What does the Constitution do?',
    'answer': 'All of the above',
    'choices': [
      'Forms the government',
      'Defines powers of government',
      'Defines parts of government',
      'Protects the rights of the people',
      'All of the above'
    ],
    'topic': 'American Government',
    'subTopic': 'Principles of American Democracy'
  },
  {
    'id': 3,
    'question': 'The idea of self-government is in the first three words of the Constitution. What are these words?',
    'answer': 'We the People',
    'topic': 'American Government',
    'subTopic': 'Principles of American Democracy'
  },
  {
    'id': 4,
    'question': 'What is an amendment?',
    'answer': 'a change (to the Constitution), an addition (to the Constitution)',
    'topic': 'American Government',
    'subTopic': 'Principles of American Democracy'
  },
  {
    'id': 5,
    'question': 'What do we call the first ten amendments to the Constitution?',
    'answer': 'the Bill of Rights',
    'topic': 'American Government',
    'subTopic': 'Principles of American Democracy'
  },
  {
    'id': 6,
    'question': 'What is one right or freedom from the First Amendment?',
    'answer': 'speech, religion, assembly, press, petition the government',
    'topic': 'American Government',
    'subTopic': 'Principles of American Democracy'
  },
  {
    'id': 7,
    'question': 'How many amendments does the Constitution have?',
    'answer': 'twenty-seven (27)',
    'choices': [
      'ten (10)',
      'five (5)',
      'one hundred and 2 (102)',
      'twentyseven (27)'
    ],
    'topic': 'American Government',
    'subTopic': 'Principles of American Democracy'
  },
  {
    'id': 8,
    'question': 'What did the Declaration of Independence do?',
    'answer': 'All of the above',
    'choices': [
      'It says America is free from British control',
      'It says all people are created equal',
      'It identifies inherent rights',
      'It identifies individual freedoms',
      'All of the above'
    ],
    'topic': 'American Government',
    'subTopic': 'Principles of American Democracy'
  },
  {
    'id': 9,
    'question': 'What are two rights in the Declaration of Independence?',
    'answer': 'B and C',
    'choices': [
      'Voting',
      'Equality',
      'Liberty',
      'B and C'
    ],
    'topic': 'American Government',
    'subTopic': 'Principles of American Democracy'
  },
  {
    'id': 10,
    'question': 'What is freedom of religion?',
    'answer': 'You can practice any religion, or not practice a religion.',
    'topic': 'American Government',
    'subTopic': 'Principles of American Democracy'
  },
  {
    'id': 11,
    'question': 'What is the economic system in the United States?*',
    'answer': 'capitalist economy, market economy',
    'choices': [
      'Capitalism',
      'Marxist economy',
      'Socialist economy',
      'Communist economy'
    ],
    'topic': 'American Government',
    'subTopic': 'Principles of American Democracy'
  },
  {
    'id': 12,
    'question': 'What is the “rule of law”?',
    'answer': 'Everyone must follow the law, Leaders must obey the law, Government must obey the law, No one is above the law.',
    'choices': [
      'Only Americans who are naturalized citizens must follow the law',
      'Everyone must follow the law, except government leaders',
      'Everyone must follow the law, Leaders must obey the law, Government must obey the law, No one is above the law.',
      'Only Congress is above the law'
    ],
    'topic': 'American Government',
    'subTopic': 'Principles of American Democracy'
  },
  {
    'id': 13,
    'question': 'Name one branch or part of the government.*',
    'answer': 'Congress, Legislative, President, Executive, The courts, Judicial',
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 14,
    'question': 'What stops one branch of government from becoming too powerful?',
    'answer': 'checks and balances, separation of powers',
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 15,
    'question': 'Who is in charge of the executive branch?',
    'answer': 'the President',
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 16,
    'question': 'Who makes federal laws?',
    'answer': 'Congress, Senate and House (of Representatives), (U.S. or national) legislature',
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 17,
    'question': 'What are the two parts of the U.S. Congress?*',
    'answer': 'B and C',
    'choices': [
      'The Courts',
      'The Senate',
      'The House of Representatives',
      'B and C'
    ],
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 18,
    'question': 'How many U.S. Senators are there?',
    'answer': 'one hundred (100)',
    'choices': [
      'twentyfive (25)',
      'fortyfive (45)',
      'four hundred thirtyfive (435)',
      'one hundred (100)'
    ],
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 19,
    'question': 'We elect a U.S. Senator for how many years?',
    'answer': 'six (6)',
    'choices': [
      'two (2)',
      'four (4)',
      'five (5)',
      'six (6)'
    ],
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 20,
    'question': 'Who is one of your state’s U.S. Senators now?*',
    'answer': 'Answers will vary. [District of Columbia residents and residents of U.S. territories should answer that D.C. (or the territory where the applicant lives) has no U.S. Senators.]',
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 21,
    'question': 'The House of Representatives has how many voting members?',
    'answer': 'four hundred thirty-five (435)',
    'choices': [
      'four hundred thirty-five (435)',
      'one hundred (100)',
      'two hundred (200)',
      'fifty (50)'
    ],
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 22,
    'question': 'We elect a U.S. Representative for how many years?',
    'answer': 'two (2)',
    'choices': [
      'two (2)',
      'three (3)',
      'four (4)',
      'five (5)'
    ],
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 23,
    'question': 'Name your U.S. Representative.',
    'answer': 'Answers will vary. [Residents of territories with nonvoting Delegates or Resident Commissioners may provide the name of that Delegate or Commissioner. Also acceptable is any statement that the territory has no (voting) Representatives in Congress.]',
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 24,
    'question': 'We elect a U.S. Senator for how many years?',
    'answer': 'all people of the state',
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 25,
    'question': 'Why do some states have more Representatives than other states?',
    'answer': 'Because some states have more people',
    'choices': [
      'Because some states are considered better',
      'Because some states have more people',
      'Because states can pick how many representatives they want to send to the house',
      'None of the above'
    ],
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 26,
    'question': 'We elect a President for how many years?',
    'answer': 'Four (4)',
    'choices': [
      'Two (2)',
      'Four (4)',
      'Six (6)',
      'Eight (8)'
    ],
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 27,
    'question': 'In what month do we vote for President?*',
    'answer': 'November',
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 28,
    'question': 'What is the name of the President of the United States now?*',
    'answer': 'Joseph R. Biden, Jr., Joe Biden, Biden',
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 29,
    'question': 'What is the name of the Vice President of the United States now?',
    'answer': 'Kamala D. Harris, Kamala Harris, Harris',
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 30,
    'question': 'If the President can no longer serve, who becomes President?',
    'answer': 'the Vice President',
    'choices': [
      'The Vice President',
      'The Secretary of State',
      'The Speaker of the House',
      'A member of Congress'
    ],
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 31,
    'question': 'If both the President and the Vice President can no longer serve, who becomes President?',
    'answer': 'the Speaker of the House',
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 32,
    'question': 'Who is the Commander in Chief of the military?',
    'answer': 'the President',
    'choices': [
      'The General',
      'The Vice President',
      'The Speaker of the House',
      'The President'
    ],
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 33,
    'question': 'Who signs bills to become laws?',
    'answer': 'the President',
    'choices': [
      'Member of Congress',
      'The President',
      'Supreme Court Justices',
      'All of the above'
    ],
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 34,
    'question': 'Who vetoes bills?',
    'answer': 'the President',
    'choices': [
      'A Member of Congress',
      'the President',
      'Supreme Court Justices',
      'All of the above'
    ],
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 35,
    'question': 'What does the President’s Cabinet do?',
    'answer': 'advises the President',
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 36,
    'question': 'What are two Cabinet-level positions?',
    'answer': 'Secretary of Agriculture,Secretary of Commerce, Secretary of Defense, Secretary of Education, Secretary of Energy, Secretary of Health and Human Services, Secretary of Homeland Security, Secretary of Housing and Urban Development, Secretary of the Interior, Secretary of Labor, Secretary of State, Secretary of Transportation, Secretary of the Treasury, Secretary of Veterans Affairs, Attorney General, Vice President',
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 37,
    'question': 'What does the judicial branch do?',
    'answer': 'Reviews laws, explains laws, resolves disputes (disagreements), decides if a law goes against the Constitution',
    'choices': [
      'Writes laws',
      'Only reviews laws',
      'Only explains laws',
      'Reviews laws, explains laws, resolves disputes (disagreements), decides if a law goes against the Constitution'
    ],
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 38,
    'question': 'What is the highest court in the United States?',
    'answer': 'the Supreme Court',
    'choices': [
      'The Cour of Appeals',
      'The District Court',
      'The Federal Court',
      'The Supreme Court'
    ],
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 39,
    'question': 'How many justices are on the Supreme Court?',
    'answer': 'nine (9)',
    'choices': [
      'five (5)',
      'seven (7)',
      'nine (9)',
      'eleven (11)'
    ],
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 40,
    'question': 'Who is the Chief Justice of the United States now?',
    'answer': 'John Roberts, John G. Roberts, Jr.',
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 41,
    'question': 'Under our Constitution, some powers belong to the federal government. What is one power of the federal government?',
    'answer': 'All of the above',
    'choices': [
      'Writes laws',
      'Declares war',
      'Makes the federal budget',
      'All of the above'
    ],
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 42,
    'question': 'Under our Constitution, some powers belong to the states. What is one power of the states?',
    'answer': 'provide schooling and education, provide protection (police), provide safety (fire departments), give a driver’s license, approve zoning and land use',
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 43,
    'question': 'Who is the Chief Justice of the United States now?',
    'answer': 'Answers will vary. [District of Columbia residents should answer that D.C. does not have a Governor.]',
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 44,
    'question': 'What is the capital of your state?*',
    'answer': 'Answers will vary. [District of Columbia residents should answer that D.C. is not a state and does not have a capital. Residents of U.S. territories should name the capital of the territory.]',
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 45,
    'question': 'What are the two major political parties in the United States?*',
    'answer': 'Democratic and Republican',
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 46,
    'question': 'What is the political party of the President now?',
    'answer': 'Democratic (Party)',
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 47,
    'question': 'What is the name of the Speaker of the House of Representatives now?',
    'answer': 'Nancy Pelosi, Pelosi ',
    'topic': 'American Government',
    'subTopic': 'System of Government'
  },
  {
    'id': 48,
    'question': 'There are four amendments to the Constitution about who can vote. Describe one of them.?',
    'answer': 'Citizens eighteen and older can vote',
    'choices': [
      'Citizens eighteen years and older can vote',
      'Anyone with a driver\'s license can vote',
      'Everyone must register to vote',
      'None of the above'
    ],
    'topic': 'American Government',
    'subTopic': 'Rights and Responsibilities'
  },
  {
    'id': 49,
    'question': 'What is one responsibility that is only for United States citizens?*',
    'answer': 'serve on a jury, vote in a federal election',
    'topic': 'American Government',
    'subTopic': 'Rights and Responsibilities'
  },
  {
    'id': 50,
    'question': 'Name one right only for United States citizens.',
    'answer': 'vote in a federal election, run for federal office',
    'topic': 'American Government',
    'subTopic': 'Rights and Responsibilities'
  },
  {
    'id': 51,
    'question': 'What are two rights of everyone living in the United States?',
    'answer': 'freedom of expression, freedom of speech, freedom of assembly, freedom to petition the government, freedom of religion, the right to bear arms',
    'topic': 'American Government',
    'subTopic': 'Rights and Responsibilities'
  },
  {
    'id': 52,
    'question': 'What do we show loyalty to when we say the Pledge of Allegiance?',
    'answer': 'the United States,the flag',
    'choices': [
      'The flag',
      'The President',
      'The founding fathers',
      'Our ancestors'
    ],
    'topic': 'American Government',
    'subTopic': 'Rights and Responsibilities'
  },
  {
    'id': 53,
    'question': 'What is one promise you make when you become a United States citizen?',
    'answer': 'Obey the laws of the US & Give up loyalty to other countries',
    'choices': [
      'Obey the laws of the US',
      'Give up loyalty to other countries',
      'Promise to give your inheritance to the country when you die',
      'Promise to visit the White House'
    ],
    'topic': 'American Government',
    'subTopic': 'Rights and Responsibilities'
  },
  {
    'id': 54,
    'question': 'How old do citizens have to be to vote for President?*',
    'answer': 'eighteen (18) and older',
    'topic': 'American Government',
    'subTopic': 'Rights and Responsibilities'
  },
  {
    'id': 55,
    'question': 'What are two ways that Americans can participate in their democracy?',
    'answer': 'Vote & Run for office (pick two)',
    'choices': [
      'Enlist in the military',
      'Travel abroad',
      'Vote',
      'Run for office'
    ],
    'topic': 'American Government',
    'subTopic': 'Rights and Responsibilities'
  },
  {
    'id': 56,
    'question': 'When is the last day you can send in federal income tax forms?*',
    'answer': 'April 15',
    'topic': 'American Government',
    'subTopic': 'Rights and Responsibilities'
  },
  {
    'id': 57,
    'question': 'When must all men register for the Selective Service?',
    'answer': 'at age eighteen (18), between eighteen (18) and twenty-six (26)',
    'topic': 'American Government',
    'subTopic': 'Rights and Responsibilities'
  },
  {
    'id': 58,
    'question': 'What is one reason colonists came to America?',
    'answer': 'All of the above',
    'choices': [
      'Political liberty',
      'Religious freedom',
      'Economic opportunity',
      'All of the above'
    ],
    'topic': 'American History',
    'subTopic': 'Colonial Period and Independence'
  },
  {
    'id': 59,
    'question': 'Who lived in America before the Europeans arrived?',
    'answer': 'American Indians, Native Americans',
    'choices': [
      'Native Americans',
      'Latinos',
      'Cowboys',
      'All of the above'
    ],
    'topic': 'American History',
    'subTopic': 'Colonial Period and Independence'
  },
  {
    'id': 60,
    'question': 'What group of people was taken to America and sold as slaves?',
    'answer': 'Africans',
    'choices': [
      'Chinese',
      'Latinos',
      'Africans',
      'Indians'
    ],
    'topic': 'American History',
    'subTopic': 'Colonial Period and Independence'
  },
  {
    'id': 61,
    'question': 'Why did the colonists fight the British?',
    'answer': 'All of the above',
    'choices': [
      'Because of high taxes (taxation without representation)',
      'Because the British army stayed in their houses (boarding, quartering)',
      'Because they didn\'t have self-government',
      'All of the above'
    ],
    'topic': 'American History',
    'subTopic': 'Colonial Period and Independence'
  },
  {
    'id': 62,
    'question': 'Who wrote the Declaration of Independence?',
    'answer': '(Thomas) Jefferson',
    'choices': [
      'George Washington',
      'James Madison',
      'John Adams',
      'Thomas Jefferson'
    ],
    'topic': 'American History',
    'subTopic': 'Colonial Period and Independence'
  },
  {
    'id': 63,
    'question': 'When was the Declaration of Independence adopted?',
    'answer': 'July 4, 1776',
    'choices': [
      'July 2, 1776',
      'July 4, 1776',
      'July 6, 1776',
      'July 8, 1776'
    ],
    'topic': 'American History',
    'subTopic': 'Colonial Period and Independence'
  },
  {
    'id': 64,
    'question': 'There were 13 original states. Name five.',
    'answer': 'Massachusetts, Rhode Island, New York, New Jersey, and Delaware',
    'choices': [
      'Massachusetts, Rhode Island, New York, New Jersey, and Delaware',
      'Massachusetts, Rhode Island, Ohio, Pennsylvania, and Delaware',
      'North Carolina, South Carolina, Ohio, New Jersey, and Delaware',
      'North Carolina, South Carolina, New Jersy, California, and Delaware'
    ],
    'topic': 'American History',
    'subTopic': 'Colonial Period and Independence'
  },
  {
    'id': 65,
    'question': 'What happened at the Constitutional Convention?',
    'answer': 'The Constitution was written, The Founding Fathers wrote the Constitution.',
    'topic': 'American History',
    'subTopic': 'Colonial Period and Independence'
  },
  {
    'id': 66,
    'question': 'When was the Constitution written?',
    'answer': '1787',
    'topic': 'American History',
    'subTopic': 'Colonial Period and Independence'
  },
  {
    'id': 67,
    'question': 'The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.',
    'answer': 'James Madison',
    'choices': [
      'James Madison',
      'Thomas Jefferson',
      'George Washington',
      'All of the above'
    ],
    'topic': 'American History',
    'subTopic': 'Colonial Period and Independence'
  },
  {
    'id': 68,
    'question': 'What is one thing Benjamin Franklin is famous for?',
    'answer': 'Having started the first free libraries',
    'choices': [
      'Declaring war on the South',
      'Having started the first free libraries',
      'Being a President',
      'Inventing the dollar'
    ],
    'topic': 'American History',
    'subTopic': 'Colonial Period and Independence'
  },
  {
    'id': 69,
    'question': 'Who is the “Father of Our Country”?',
    'answer': '(George) Washington',
    'topic': 'American History',
    'subTopic': 'Colonial Period and Independence'
  },
  {
    'id': 70,
    'question': 'Who was the first President?*',
    'answer': '(George) Washington',
    'topic': 'American History',
    'subTopic': 'Colonial Period and Independence'
  },
  {
    'id': 71,
    'question': 'What territory did the United States buy from France in 1803?',
    'answer': 'the Louisiana Territory',
    'choices': [
      'The New Mexico Territory',
      'The Nevada Territory',
      'The Arizona Territory',
      'The Louisiana Territory'
    ],
    'topic': 'American History',
    'subTopic': '1800s'
  },
  {
    'id': 72,
    'question': 'Name one war fought by the United States in the 1800s.',
    'answer': 'Both B and C',
    'choices': [
      'World War 1',
      'Civil War',
      'Mexican-American War',
      'Both B and C'
    ],
    'topic': 'American History',
    'subTopic': '1800s'
  },
  {
    'id': 73,
    'question': 'Name the U.S. war between the North and the South.',
    'answer': 'the Civil War',
    'choices': [
      'The Civil War',
      'The Union War',
      'The Confederacy War',
      'None of the above'
    ],
    'topic': 'American History',
    'subTopic': '1800s'
  },
  {
    'id': 74,
    'question': 'Name one problem that led to the Civil War.',
    'answer': 'slavery, economic reasons, states’ rights',
    'topic': 'American History',
    'subTopic': '1800s'
  },
  {
    'id': 75,
    'question': 'What was one important thing that Abraham Lincoln did?*',
    'answer': 'All of the above',
    'choices': [
      'Freed the slaves (Emancipation Proclamation)',
      'Saved (or preserved) the Union',
      'Led the United States during the Civil War',
      'All of the above'
    ],
    'topic': 'American History',
    'subTopic': '1800s'
  },
  {
    'id': 76,
    'question': 'What did the Emancipation Proclamation do?',
    'answer': 'Freed the slaves',
    'choices': [
      'Freed the slaves',
      'Declared war on the South',
      'Proclaimed the Union\'s independence from the Confederacy',
      'All of the above'
    ],
    'topic': 'American History',
    'subTopic': '1800s'
  },
  {
    'id': 77,
    'question': 'What did Susan B. Anthony do?',
    'answer': 'fought for women’s rights, fought for civil rights',
    'topic': 'American History',
    'subTopic': '1800s'
  },
  {
    'id': 78,
    'question': 'Name one war fought by the United States in the 1900s.*',
    'answer': 'World War 1',
    'choices': [
      'The French War',
      'The Indian War',
      'World War 1',
      'All of the above'
    ],
    'topic': 'American History',
    'subTopic': 'Recent American History and Other Important Historical Information'
  }, 
  {
    'id': 79,
    'question': 'Who was President during World War I?',
    'answer': '(Woodrow) Wilson',
    'topic': 'American History',
    'subTopic': 'Recent American History and Other Important Historical Information'
  },
  {
    'id': 80,
    'question': 'Who was President during the Great Depression and World War II?',
    'answer': 'Franklin Roosevelt',
    'choices': [
      'Theodore Roosevelt',
      'Franklin Roosevelt',
      'Herbert Hoover',
      'John F. Kennedy'
    ],
    'topic': 'American History',
    'subTopic': 'Recent American History and Other Important Historical Information'
  },
  {
    'id': 81,
    'question': 'Who did the United States fight in World War II?',
    'answer': 'Japan, Germany, and Italy',
    'topic': 'American History',
    'subTopic': 'Recent American History and Other Important Historical Information'
  },
  {
    'id': 82,
    'question': 'Before he was President, Eisenhower was a general. What war was he in?',
    'answer': 'World War II',
    'topic': 'American History',
    'subTopic': 'Recent American History and Other Important Historical Information'
  },
  {
    'id': 83,
    'question': 'During the Cold War, what was the main concern of the United States?',
    'answer': 'Communism',
    'choices': [
      'Slavery',
      'Socialism',
      'Communism',
      'Civil rights'
    ],
    'topic': 'American History',
    'subTopic': 'Recent American History and Other Important Historical Information'
  },
  {
    'id': 84,
    'question': 'What movement tried to end racial discrimination?',
    'answer': 'civil rights (movement)',
    'topic': 'American History',
    'subTopic': 'Recent American History and Other Important Historical Information'
  },
  {
    'id': 85,
    'question': 'What did Martin Luther King, Jr. do?*',
    'answer': 'fought for civil rights, worked for equality for all Americans',
    'choices': [
      'First black President',
      'Opened a university',
      'Fought for civil rights',
      'All of the above'
    ],
    'topic': 'American History',
    'subTopic': 'Recent American History and Other Important Historical Information'
  },
  {
    'id': 86,
    'question': 'What major event happened on September 11, 2001, in the United States?',
    'answer': 'Terrorists attacked the United States',
    'choices': [
      'The US declared war on Syria',
      'Terrorists attacked the United States',
      'both a and b',
      'None of the above'
    ],
    'topic': 'American History',
    'subTopic': 'Recent American History and Other Important Historical Information'
  },
  {
    'id': 87,
    'question': 'Name one American Indian tribe in the United States.',
    'answer': 'Cherokee',
    'choices': [
      'Mayan',
      'Aztec',
      'Cherokee',
      'All of the above'
    ],
    'topic': 'American History',
    'subTopic': 'Recent American History and Other Important Historical Information'
  },
  {
    'id': 88,
    'question': 'Name one of the two longest rivers in the United States.',
    'answer': 'Missouri (River), Mississippi (River)',
    'topic': 'Integrated Civics',
    'subTopic': 'Geography'
  },
  {
    'id': 89,
    'question': 'What ocean is on the West Coast of the United States?',
    'answer': 'Pacific (Ocean)',
    'topic': 'Integrated Civics',
    'subTopic': 'Geography'
  },
  {
    'id': 90,
    'question': 'What ocean is on the East Coast of the United States?',
    'answer': 'Atlantic (Ocean)',
    'topic': 'Integrated Civics',
    'subTopic': 'Geography'
  },
  {
    'id': 91,
    'question': 'Name one U.S. territory.',
    'answer': 'Puerto Rico, U.S. Virgin Islands, American Samoa, Northern Mariana Islands, Guam',
    'topic': 'Integrated Civics',
    'subTopic': 'Geography'
  },
  {
    'id': 92,
    'question': 'Name one state that borders Canada.',
    'answer': 'Maine, New Hampshire, Vermont, New York, Pennsylvania, Ohio, Michigan, Minnesota, North Dakota, Montana, Idaho, Washington, Alaska',
    'topic': 'Integrated Civics',
    'subTopic': 'Geography'
  },
  {
    'id': 93,
    'question': 'Name one state that borders Mexico.',
    'answer': 'California, Arizona, New Mexico, Texas',
    'topic': 'Integrated Civics',
    'subTopic': 'Geography'
  },
  {
    'id': 94,
    'question': 'What is the capital of the United States?*',
    'answer': 'Washington, D.C.',
    'choices': [
      'Cleveland, Ohio',
      'Boston, Massachusetts',
      'Philadelphia, Pennsylvania',
      'Washington, D.C.'
    ],
    'topic': 'Integrated Civics',
    'subTopic': 'Geography'
  },
  {
    'id': 95,
    'question': 'Where is the Statue of Liberty?*',
    'answer': 'New York',
    'choices': [
      'Washington, D.C.',
      'Philadelphia',
      'New York',
      'Los Angeles'
    ],
    'topic': 'Integrated Civics',
    'subTopic': 'Geography'
  },
  {
    'id': 96,
    'question': 'Why does the flag have 13 stripes?',
    'answer': 'because there were 13 original colonies',
    'choices': [
      'For the first 13 presidents',
      'Because there were 13 original colonies',
      'For 13 wars fought',
      'For 13 of the top US generals'
    ],
    'topic': 'Integrated Civics',
    'subTopic': 'Symbols'
  },
  {
    'id': 97,
    'question': 'Why does the flag have 50 stars?*',
    'answer': 'Because there are 50 states',
    'choices': [
      'For the first 50 presidents',
      'Because there are 50 states',
      'For 50 of the top US generals',
      'For 50 wars fought'
    ],
    'topic': 'Integrated Civics',
    'subTopic': 'Symbols'
  },
  {
    'id': 98,
    'question': 'What is the name of the national anthem?',
    'answer': 'The Star-Spangled Banner',
    'choices': [
      'The Land of the Free',
      'The Land',
      'The Star-Spangled Banner',
      'The Song of the Forefathers'
    ],
    'topic': 'Integrated Civics',
    'subTopic': 'Symbols'
  },
  {
    'id': 99,
    'question': 'When do we celebrate Independence Day?*',
    'answer': 'July 4',
    'topic': 'Integrated Civics',
    'subTopic': 'Holidays'
  },
  {
    'id': 100,
    'question': 'Name three national U.S. holidays.',
    'answer': 'Independence Day, Martin Luther King, Jr. Day, and Veterans Day',
    'choices': [
        'Independence Day, Martin Luther King, Jr. Day, and Veterans Day',
        'Caesar Chavez Day, Easter, Christmas',
        'Mother\'s Day, Father\'s Day, Labor Day',
        'Civil Rights Day, Declaration of Independence Day, Easter'
    ],
    'topic': 'Integrated Civics',
    'subTopic': 'Holidays'
  }
];

exports.questions = questions;
