import { type User, type InsertUser, type ContactSubmission, type InsertContactSubmission, type Achievement, type InsertAchievement } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  getAchievements(): Promise<Achievement[]>;
  createAchievement(achievement: InsertAchievement): Promise<Achievement>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactSubmissions: Map<string, ContactSubmission>;
  private achievements: Map<string, Achievement>;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.achievements = new Map();
    
    // Initialize with default achievements
    this.initializeAchievements();
  }

  private initializeAchievements() {
    const defaultAchievements: Omit<Achievement, 'id'>[] = [
      {
        title: "Lead Generation Increase",
        value: "150%",
        description: "Online lead generation improvement through comprehensive digital marketing strategy",
        icon: "arrow-trend-up",
        color: "primary"
      },
      {
        title: "Customer Satisfaction",
        value: "25%",
        description: "Enhanced customer satisfaction through efficient project delivery",
        icon: "heart",
        color: "accent"
      },
      {
        title: "Conversion Rate",
        value: "145%",
        description: "Improvement in marketing funnel conversion through data-driven optimization",
        icon: "percentage",
        color: "primary"
      },
      {
        title: "ROI Achievement",
        value: "2.5x",
        description: "Consistent $25K monthly revenue from $10K marketing budget",
        icon: "dollar-sign",
        color: "accent"
      }
    ];

    defaultAchievements.forEach(achievement => {
      const id = randomUUID();
      this.achievements.set(id, { ...achievement, id });
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const contactSubmission: ContactSubmission = {
      ...submission,
      id,
      submittedAt: new Date(),
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  async getAchievements(): Promise<Achievement[]> {
    return Array.from(this.achievements.values());
  }

  async createAchievement(achievement: InsertAchievement): Promise<Achievement> {
    const id = randomUUID();
    const newAchievement: Achievement = { ...achievement, id };
    this.achievements.set(id, newAchievement);
    return newAchievement;
  }
}

export const storage = new MemStorage();
