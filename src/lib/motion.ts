/** Courbes et durées partagées par toutes les animations du site. */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const; // « expo out » doux
export const EASE_IN_OUT = [0.76, 0, 0.24, 1] as const;

export const SPRING_SOFT = { stiffness: 150, damping: 20, mass: 0.4 };
export const SPRING_SNAPPY = { stiffness: 400, damping: 30, mass: 0.3 };

export const VIEWPORT_ONCE = { once: true, margin: "-10% 0px -10% 0px" } as const;
