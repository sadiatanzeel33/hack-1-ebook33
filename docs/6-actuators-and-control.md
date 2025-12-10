# Chapter 6: Actuators and Control

Actuators are the components that enable robots to move and interact with the physical world. They convert energy (electrical, hydraulic, pneumatic) into mechanical force and motion. Control systems are the "brains" that direct these actuators, ensuring that the robot performs desired actions accurately, efficiently, and safely.

## Actuators

The choice of actuator depends on factors such as power requirements, precision, speed, size, and cost.

### 1. Electric Actuators

These are the most common type in robotics due to their cleanliness, ease of control, and suitability for a wide range of applications.

*   **DC Motors:** Simple, inexpensive, and widely used for continuous rotation. Can be brushed or brushless (BLDC).
*   **Stepper Motors:** Provide precise angular positioning without feedback, often used for open-loop control in applications requiring exact incremental movements.
*   **Servo Motors:** Consist of a DC motor, a gearbox, and a feedback control circuit (encoder). They provide precise position control and are very common in robotic arms and legs.
*   **Linear Motors:** Produce linear motion directly without rotary-to-linear conversion mechanisms.

### 2. Hydraulic Actuators

Hydraulic systems use incompressible fluid under pressure to generate powerful forces.

*   **Hydraulic Cylinders:** Provide linear motion with very high force density, suitable for heavy-duty industrial robots.
*   **Hydraulic Motors:** Provide rotary motion with high torque.

**Advantages:** High power-to-weight ratio, high stiffness.
**Disadvantages:** Messy (fluid leaks), requires a power unit, less precise control than electric.

### 3. Pneumatic Actuators

Pneumatic systems use compressed air to generate motion.

*   **Pneumatic Cylinders:** Provide linear motion, typically for two-position (on/off) movements.
*   **Pneumatic Motors:** Provide rotary motion.

**Advantages:** Clean, fast, simple, inexpensive for simple tasks.
**Disadvantages:** Low stiffness, difficult to achieve precise intermediate positioning.

## Control Systems

A robot's control system orchestrates the actions of its actuators based on sensor feedback and desired goals.

### 1. Open-Loop Control

In open-loop control, the controller sends commands to the actuators without using feedback from sensors to verify if the desired action was achieved.

*   **Example:** A stepper motor commanded to move a certain number of steps.
*   **Limitations:** No error correction; susceptible to disturbances and inaccuracies.

### 2. Closed-Loop Control (Feedback Control)

Closed-loop control systems use feedback from sensors to continuously monitor the robot's state and adjust actuator commands to minimize the difference between the actual and desired state.

*   **Components:**
    *   **Controller:** Calculates the required control action.
    *   **Actuator:** Executes the action.
    *   **Plant (Robot):** The system being controlled.
    *   **Sensor:** Measures the actual state of the plant.
*   **PID (Proportional-Integral-Derivative) Controller:** A common and effective feedback control loop mechanism widely used in robotics to regulate position, velocity, or force.
    *   **Proportional (P):** Responds to the current error.
    *   **Integral (I):** Addresses accumulated past errors.
    *   **Derivative (D):** Anticipates future errors based on the rate of change of the current error.

### 3. Trajectory Generation

Before control, a trajectory (a path in space-time) needs to be planned for the robot's movements. This involves defining a sequence of desired positions, velocities, and accelerations for the robot's joints or end-effector.

Effective integration of actuators and precise control systems is what allows robots to perform complex tasks with accuracy and dexterity.

