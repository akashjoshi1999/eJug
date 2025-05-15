'use client';

export default function Footer() {
    return (
      <footer className="bg-gray-100 text-center text-sm text-gray-600 py-6 mt-8 border-t">
        <p>&copy; {new Date().getFullYear()} Ejug. All rights reserved.</p>
        <p>
          Built with <span className="text-red-500">♥</span> by Concept using Next.js
        </p>
      </footer>
    );
}

