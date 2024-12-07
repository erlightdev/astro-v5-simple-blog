import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Container } from '@/components/ui/container';

export function Footer() {
  return (
    <footer className="mt-auto">
      <Separator />
      <Container className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <p className="text-muted-foreground">
              We're dedicated to creating amazing experiences and sharing knowledge with our community.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-muted-foreground hover:text-primary">Home</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-primary">About</a></li>
              <li><a href="/blog" className="text-muted-foreground hover:text-primary">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground">
              Email: hello@example.com<br />
              Follow us on Twitter @example
            </p>
          </div>
        </div>
        <Separator className="my-8" />
        <p className="text-center text-sm text-muted-foreground">
          {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}