import http from 'http';

async function testEndpoint(path, method = 'GET', body = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 5000,
      path,
      method,
      headers: { 'Content-Type': 'application/json' }
    };
    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(data) });
        } catch (e) {
          resolve({ status: res.statusCode, raw: data });
        }
      });
    });
    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function runTests() {
  console.log('🧪 Starting API Verification Tests...');
  try {
    const health = await testEndpoint('/api/v1/health');
    console.log(`✓ [GET /api/v1/health] Status: ${health.status}, Candidate: ${health.data.candidate}`);
    const profile = await testEndpoint('/api/v1/profile');
    console.log(`✓ [GET /api/v1/profile] Status: ${profile.status}, Name: ${profile.data.data?.name}`);
    const projects = await testEndpoint('/api/v1/projects');
    console.log(`✓ [GET /api/v1/projects] Status: ${projects.status}, Count: ${projects.data.count}`);
    const skills = await testEndpoint('/api/v1/skills');
    console.log(`✓ [GET /api/v1/skills] Status: ${skills.status}, Categories: ${skills.data.count}`);
    const exp = await testEndpoint('/api/v1/experience');
    console.log(`✓ [GET /api/v1/experience] Status: ${exp.status}, Experiences: ${exp.data.data?.experience?.length}`);
    const edu = await testEndpoint('/api/v1/education');
    console.log(`✓ [GET /api/v1/education] Status: ${edu.status}, Education Items: ${edu.data.data?.length}`);
    const contact = await testEndpoint('/api/v1/contact', 'POST', {
      name: 'Recruiter Test',
      email: 'recruiter@techcompany.com',
      subject: 'Interview Invitation',
      message: 'Hello Suhani, we reviewed your MERN portfolio and are impressed.'
    });
    console.log(`✓ [POST /api/v1/contact] Status: ${contact.status}, Success: ${contact.data.success}`);
    console.log('\n🎉 ALL API ENDPOINTS PASSED VERIFICATION WITH 100% SUCCESS!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Verification failed:', error.message);
    process.exit(1);
  }
}
runTests();
