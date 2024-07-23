const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv').config();

const supabaseKey = process.env.SUPABASE_KEY;
const supabaseUrl = process.env.SUPABASE_URL;
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = {
    supabase,
}