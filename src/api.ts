// Mock API - simulates network delay
export interface Customer {
  id: string;
  name: string;
  email: string;
  company: string;
  status: 'Active' | 'Inactive' | 'Pending';
  lastContact: string;
}

// Mock data generator with unique names
const generateMockCustomers = (): Customer[] => {
  const statuses: Customer['status'][] = ['Active', 'Inactive', 'Pending'];
  const companies = [
    'Acme Corp', 'TechStart Inc', 'Global Industries', 'Innovation Labs',
    'Digital Solutions', 'Enterprise Systems', 'Cloud Services', 'Data Analytics Co',
    'Software Partners', 'Consulting Group', 'Development Studios', 'Tech Ventures'
  ];

  // Unique names list - 150 unique people
  const uniqueNames = [
    'James Anderson', 'Maria Garcia', 'Robert Chen', 'Jennifer Martinez', 'Michael Brown',
    'Lisa Taylor', 'David Wilson', 'Sarah Thompson', 'Christopher Moore', 'Jessica White',
    'Daniel Harris', 'Emily Clark', 'Matthew Lewis', 'Ashley Robinson', 'Joshua Walker',
    'Amanda Hall', 'Andrew Young', 'Melissa Allen', 'Justin King', 'Stephanie Wright',
    'Ryan Lopez', 'Nicole Hill', 'Brandon Scott', 'Laura Green', 'Jason Adams',
    'Rachel Baker', 'Kevin Nelson', 'Heather Carter', 'Eric Mitchell', 'Michelle Perez',
    'Brian Roberts', 'Angela Turner', 'Nicholas Phillips', 'Kimberly Campbell', 'Gregory Parker',
    'Deborah Evans', 'Steven Edwards', 'Donna Collins', 'Timothy Stewart', 'Carol Sanchez',
    'Jacob Morris', 'Sandra Rogers', 'Patrick Reed', 'Betty Cook', 'Samuel Morgan',
    'Dorothy Bell', 'Kyle Murphy', 'Nancy Bailey', 'Aaron Rivera', 'Linda Cooper',
    'Jonathan Richardson', 'Barbara Cox', 'Henry Howard', 'Elizabeth Ward', 'Zachary Torres',
    'Karen Peterson', 'Douglas Gray', 'Susan Ramirez', 'Peter James', 'Margaret Watson',
    'Alexander Brooks', 'Helen Kelly', 'Benjamin Sanders', 'Patricia Price', 'Walter Bennett',
    'Debra Wood', 'Charles Barnes', 'Cynthia Ross', 'Jack Henderson', 'Kathleen Coleman',
    'Tyler Jenkins', 'Amy Perry', 'Raymond Powell', 'Shirley Long', 'Keith Patterson',
    'Anna Hughes', 'Gary Flores', 'Rebecca Washington', 'Jeremy Butler', 'Brenda Simmons',
    'Edward Foster', 'Julie Gonzales', 'Ronald Bryant', 'Christine Alexander', 'Adam Russell',
    'Virginia Griffin', 'Nathan Hayes', 'Catherine Myers', 'Vincent Ford', 'Carolyn Hamilton',
    'Albert Graham', 'Janet Sullivan', 'Joe Wallace', 'Frances Woods', 'Carl West',
    'Diane Cole', 'Willie Jordan', 'Joyce Owens', 'Lawrence Reynolds', 'Pamela Fisher',
    'Austin Ellis', 'Evelyn Gibson', 'Roy McDonald', 'Gloria Cruz', 'Russell Marshall',
    'Teresa Ortiz', 'Louis Gomez', 'Judy Murray', 'Eugene Freeman', 'Sara Wells',
    'Arthur Webb', 'Janice Simpson', 'Dylan Stevens', 'Kathryn Tucker', 'Noah Porter',
    'Ann Hunter', 'Harold Hicks', 'Jean Crawford', 'Roger Henry', 'Alice Boyd',
    'Bruce Mason', 'Doris Morales', 'Gerald Kennedy', 'Megan Warren', 'Philip Dixon',
    'Cheryl Ramos', 'Christian Reyes', 'Martha Burns', 'Frank Gordon', 'Rose Shaw',
    'Dennis Holmes', 'Diana Rice', 'Sean Robertson', 'Olivia Hunt', 'Wayne Black',
    'Jacqueline Daniels', 'Bobby Palmer', 'Victoria Mills', 'Ethan Nichols', 'Julia Grant',
    'Randy Knight', 'Sophia Ferguson', 'Louis Stone', 'Madison Hawkins', 'Billy Dunn',
    'Grace Perkins', 'Mason Hudson', 'Evelyn Spencer', 'Caleb Gardner', 'Hannah Stephens'
  ];

  const customers: Customer[] = [];

  for (let i = 0; i < 150; i++) {
    const name = uniqueNames[i];
    const company = companies[i % companies.length]; // Distribute evenly across companies
    const [firstName, lastName] = name.split(' ');

    customers.push({
      id: `customer-${i + 1}`,
      name: name,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${company.toLowerCase().replace(/\s+/g, '')}.com`,
      company,
      status: statuses[i % 3], // Rotate through statuses
      lastContact: new Date(Date.now() - (i * 12 * 60 * 60 * 1000)).toISOString() // Spread over time
    });
  }

  return customers;
};

const MOCK_DATA = generateMockCustomers();

export const fetchCustomers = async (searchTerm: string = ''): Promise<Customer[]> => {
  await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 200));

  console.log('API called with search term:', searchTerm);

  return MOCK_DATA;
};
