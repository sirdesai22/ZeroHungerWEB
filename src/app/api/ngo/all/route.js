import connectToDatabase from '../../../../lib/mongodb';
import Ngo from '../../../../models/Ngo';
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    await connectToDatabase(); // Ensure the database connection is established
    const ngos = await Ngo.find({}); // Fetch all NGO records

    // Return the NGOs as JSON using NextResponse
    return NextResponse.json(ngos);
  } catch (error) {
    console.error('Error fetching NGOs:', error);
    return NextResponse.json({ message: 'Failed to fetch NGOs' }, { status: 500 });
  }
}

// export async function POST(req) {
//   try {
//     await connectToDatabase(); // Ensure the database connection is established

//     // Parse the request body
//     const body = await req.json();
    
//     const ngo = new Ngo(body); // Create a new NGO document based on the request body
//     await ngo.save(); // Save the new NGO to the database

//     // Return the created NGO as JSON
//     return NextResponse.json(ngo, { status: 201 });
//   } catch (error) {
//     console.error('Error creating NGO:', error);
//     return NextResponse.json({ message: 'Failed to create NGO' }, { status: 500 });
//   }
// }
