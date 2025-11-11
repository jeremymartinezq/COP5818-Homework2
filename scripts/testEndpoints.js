/**
 * Endpoint Testing Script
 * 
 * Tests all API endpoints and displays results
 * Run with: node scripts/testEndpoints.js
 */

const baseURL = 'http://localhost:3000/api';

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

function log(color, message) {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function printSeparator() {
  console.log('\n' + '='.repeat(70) + '\n');
}

async function testEndpoint(method, endpoint, body = null, description) {
  log('cyan', `\n📍 Testing: ${description}`);
  log('blue', `   ${method} ${endpoint}`);
  
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  if (body) {
    options.body = JSON.stringify(body);
    log('yellow', `   Request Body: ${JSON.stringify(body, null, 2)}`);
  }
  
  try {
    const response = await fetch(`${baseURL}${endpoint}`, options);
    const data = await response.json();
    
    if (response.ok) {
      log('green', `   ✅ Status: ${response.status} ${response.statusText}`);
      log('green', `   Response: ${JSON.stringify(data, null, 2)}`);
      return { success: true, data, status: response.status };
    } else {
      log('red', `   ❌ Status: ${response.status} ${response.statusText}`);
      log('red', `   Error: ${JSON.stringify(data, null, 2)}`);
      return { success: false, data, status: response.status };
    }
  } catch (error) {
    log('red', `   ❌ Error: ${error.message}`);
    return { success: false, error: error.message };
  }
}

async function runTests() {
  log('blue', '\n╔══════════════════════════════════════════════════════════════════╗');
  log('blue', '║          API ENDPOINT TESTING - COP5818 Homework 2              ║');
  log('blue', '╚══════════════════════════════════════════════════════════════════╝\n');
  
  const results = {
    passed: 0,
    failed: 0,
    total: 0
  };
  
  let createdId;
  
  // ============================================
  // CRUD OPERATIONS TESTS
  // ============================================
  printSeparator();
  log('yellow', '📝 CRUD OPERATIONS TESTS');
  printSeparator();
  
  // 1. CREATE - POST /api/data
  const createResult = await testEndpoint(
    'POST',
    '/data',
    {
      city: 'Test City',
      population: 100000,
      growthRate: 3.5,
      density: 1500,
      averageAge: 32
    },
    'Create New City Entry'
  );
  results.total++;
  if (createResult.success && createResult.status === 201) {
    results.passed++;
    createdId = createResult.data.id;
  } else {
    results.failed++;
  }
  
  // 2. READ ALL - GET /api/data
  const getAllResult = await testEndpoint(
    'GET',
    '/data',
    null,
    'Get All Cities'
  );
  results.total++;
  if (getAllResult.success && getAllResult.status === 200) {
    results.passed++;
    log('cyan', `   📊 Found ${getAllResult.data.length} cities in database`);
  } else {
    results.failed++;
  }
  
  // 3. READ ONE - GET /api/data/:id
  if (createdId) {
    const getOneResult = await testEndpoint(
      'GET',
      `/data/${createdId}`,
      null,
      'Get City By ID'
    );
    results.total++;
    if (getOneResult.success && getOneResult.status === 200) {
      results.passed++;
    } else {
      results.failed++;
    }
  }
  
  // 4. UPDATE - PUT /api/data/:id
  if (createdId) {
    const updateResult = await testEndpoint(
      'PUT',
      `/data/${createdId}`,
      {
        population: 110000,
        growthRate: 3.8
      },
      'Update City Entry'
    );
    results.total++;
    if (updateResult.success && updateResult.status === 200) {
      results.passed++;
    } else {
      results.failed++;
    }
  }
  
  // 5. DELETE - DELETE /api/data/:id
  if (createdId) {
    const deleteResult = await testEndpoint(
      'DELETE',
      `/data/${createdId}`,
      null,
      'Delete City Entry'
    );
    results.total++;
    if (deleteResult.success && deleteResult.status === 200) {
      results.passed++;
    } else {
      results.failed++;
    }
  }
  
  // ============================================
  // QUESTION ENDPOINTS TESTS
  // ============================================
  printSeparator();
  log('yellow', '❓ ANALYTICAL QUESTION ENDPOINTS TESTS');
  printSeparator();
  
  // Question 1: Fastest Growing City
  const q1 = await testEndpoint(
    'GET',
    '/questions/fastest-growing-city',
    null,
    'Question 1: Fastest Growing City'
  );
  results.total++;
  if (q1.success && q1.data.answer) {
    results.passed++;
    log('cyan', `   🏆 Answer: ${q1.data.answer}`);
  } else {
    results.failed++;
  }
  
  // Question 2: Average Age
  const q2 = await testEndpoint(
    'GET',
    '/questions/average-age',
    null,
    'Question 2: Average Age Across All Cities'
  );
  results.total++;
  if (q2.success && q2.data.answer) {
    results.passed++;
    log('cyan', `   👥 Answer: ${q2.data.answer} years`);
  } else {
    results.failed++;
  }
  
  // Question 3: Most Populous City
  const q3 = await testEndpoint(
    'GET',
    '/questions/most-populous-city',
    null,
    'Question 3: Most Populous City'
  );
  results.total++;
  if (q3.success && q3.data.answer) {
    results.passed++;
    log('cyan', `   🏙️  Answer: ${q3.data.answer} (${q3.data.population.toLocaleString()} people)`);
  } else {
    results.failed++;
  }
  
  // Question 4: Highest Density City
  const q4 = await testEndpoint(
    'GET',
    '/questions/highest-density-city',
    null,
    'Question 4: Highest Population Density'
  );
  results.total++;
  if (q4.success && q4.data.answer) {
    results.passed++;
    log('cyan', `   🏢 Answer: ${q4.data.answer} (${q4.data.density} per sq mi)`);
  } else {
    results.failed++;
  }
  
  // Question 5: Total Population
  const q5 = await testEndpoint(
    'GET',
    '/questions/total-population',
    null,
    'Question 5: Total Population Across All Cities'
  );
  results.total++;
  if (q5.success && q5.data.answer) {
    results.passed++;
    log('cyan', `   📈 Answer: ${q5.data.answer.toLocaleString()} people`);
  } else {
    results.failed++;
  }
  
  // Question 6: Youngest City
  const q6 = await testEndpoint(
    'GET',
    '/questions/youngest-city',
    null,
    'Question 6: City with Youngest Average Age'
  );
  results.total++;
  if (q6.success && q6.data.answer) {
    results.passed++;
    log('cyan', `   👶 Answer: ${q6.data.answer} (avg age: ${q6.data.averageAge})`);
  } else {
    results.failed++;
  }
  
  // Question 7: Cities Above Average Growth
  const q7 = await testEndpoint(
    'GET',
    '/questions/cities-above-average-growth',
    null,
    'Question 7: Cities Above Average Growth Rate'
  );
  results.total++;
  if (q7.success && q7.data.answer !== undefined) {
    results.passed++;
    log('cyan', `   📊 Answer: ${q7.data.answer} cities (avg growth: ${q7.data.averageGrowthRate}%)`);
    log('cyan', `   Cities: ${q7.data.cities.join(', ')}`);
  } else {
    results.failed++;
  }
  
  // Question 8: Least Dense City
  const q8 = await testEndpoint(
    'GET',
    '/questions/least-dense-city',
    null,
    'Question 8: Lowest Population Density'
  );
  results.total++;
  if (q8.success && q8.data.answer) {
    results.passed++;
    log('cyan', `   🌳 Answer: ${q8.data.answer} (${q8.data.density} per sq mi)`);
  } else {
    results.failed++;
  }
  
  // ============================================
  // TEST SUMMARY
  // ============================================
  printSeparator();
  log('yellow', '📊 TEST SUMMARY');
  printSeparator();
  
  log('blue', `Total Tests: ${results.total}`);
  log('green', `✅ Passed: ${results.passed}`);
  log('red', `❌ Failed: ${results.failed}`);
  
  const passRate = ((results.passed / results.total) * 100).toFixed(1);
  console.log();
  
  if (results.failed === 0) {
    log('green', `🎉 ALL TESTS PASSED! (${passRate}%)`);
    log('green', '✨ Your API is working perfectly!');
  } else {
    log('yellow', `⚠️  ${results.failed} test(s) failed (${passRate}% pass rate)`);
  }
  
  printSeparator();
  
  process.exit(results.failed === 0 ? 0 : 1);
}

// Check if server is running
async function checkServer() {
  try {
    const response = await fetch(baseURL + '/data');
    return true;
  } catch (error) {
    log('red', '\n❌ ERROR: Cannot connect to server!');
    log('yellow', '\n💡 Make sure the server is running:');
    log('cyan', '   npm start\n');
    process.exit(1);
  }
}

// Main execution
(async () => {
  await checkServer();
  await runTests();
})();

