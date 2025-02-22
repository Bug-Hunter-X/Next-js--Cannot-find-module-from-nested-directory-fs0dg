```javascript
// pages/index.js
import MyComponent from './components/MyComponent';

export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <MyComponent/>
    </div>
  );
}

// pages/components/MyComponent.js
export default function MyComponent() {
  return (
    <p>This is a custom component.</p>
  );
}
```