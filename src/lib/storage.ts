import { Plan, Trainer, ClassSchedule, GalleryItem, FAQ } from "@/types";

const KEYS = {
  plans: "gym_plans",
  trainers: "gym_trainers",
  classes: "gym_classes",
  gallery: "gym_gallery",
  faqs: "gym_faqs",
  messages: "gym_messages",
  bookings: "gym_bookings",
} as const;

export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  preferredTime: string;
  className?: string;
  trainer?: string;
  time?: string;
  day?: string;
  date: string;
  status: "confirmed" | "pending" | "cancelled";
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
}

function getFromStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  const data = localStorage.getItem(key);
  if (data) {
    try {
      return JSON.parse(data);
    } catch {
      return fallback;
    }
  }
  return fallback;
}

function setToStorage<T>(key: string, data: T): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(data));
}

// Plans
export function getPlans(fallback: Plan[]): Plan[] {
  return getFromStorage<Plan[]>(KEYS.plans, fallback);
}

export function savePlans(plans: Plan[]): void {
  setToStorage(KEYS.plans, plans);
}

// Trainers
export function getTrainers(fallback: Trainer[]): Trainer[] {
  return getFromStorage<Trainer[]>(KEYS.trainers, fallback);
}

export function saveTrainers(trainers: Trainer[]): void {
  setToStorage(KEYS.trainers, trainers);
}

// Classes
export function getClasses(fallback: ClassSchedule[]): ClassSchedule[] {
  return getFromStorage<ClassSchedule[]>(KEYS.classes, fallback);
}

export function saveClasses(classes: ClassSchedule[]): void {
  setToStorage(KEYS.classes, classes);
}

// Gallery
export function getGallery(fallback: GalleryItem[]): GalleryItem[] {
  return getFromStorage<GalleryItem[]>(KEYS.gallery, fallback);
}

export function saveGallery(gallery: GalleryItem[]): void {
  setToStorage(KEYS.gallery, gallery);
}

// FAQs
export function getFAQs(fallback: FAQ[]): FAQ[] {
  return getFromStorage<FAQ[]>(KEYS.faqs, fallback);
}

export function saveFAQs(faqs: FAQ[]): void {
  setToStorage(KEYS.faqs, faqs);
}

// Messages
export function getMessages(): ContactMessage[] {
  return getFromStorage<ContactMessage[]>(KEYS.messages, []);
}

export function saveMessage(msg: Omit<ContactMessage, "id" | "date" | "read">): void {
  const messages = getMessages();
  const newMsg: ContactMessage = {
    ...msg,
    id: Date.now().toString(),
    date: new Date().toISOString(),
    read: false,
  };
  setToStorage(KEYS.messages, [newMsg, ...messages]);
}

export function markMessageRead(id: string): void {
  const messages = getMessages();
  const updated = messages.map((m) => (m.id === id ? { ...m, read: true } : m));
  setToStorage(KEYS.messages, updated);
}

export function deleteMessage(id: string): void {
  const messages = getMessages().filter((m) => m.id !== id);
  setToStorage(KEYS.messages, messages);
}

// Bookings
export function getBookings(): Booking[] {
  return getFromStorage<Booking[]>(KEYS.bookings, []);
}

export function saveBooking(booking: Omit<Booking, "id" | "date" | "status">): void {
  const bookings = getBookings();
  const newBooking: Booking = {
    ...booking,
    id: Date.now().toString(),
    date: new Date().toISOString(),
    status: "confirmed",
  };
  setToStorage(KEYS.bookings, [newBooking, ...bookings]);
}

export function updateBookingStatus(id: string, status: Booking["status"]): void {
  const bookings = getBookings();
  const updated = bookings.map((b) => (b.id === id ? { ...b, status } : b));
  setToStorage(KEYS.bookings, updated);
}

export function deleteBooking(id: string): void {
  const bookings = getBookings().filter((b) => b.id !== id);
  setToStorage(KEYS.bookings, bookings);
}
