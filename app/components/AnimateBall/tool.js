export function getDistance(x1, y1, x2, y2) {
  let dx = x1 - x2;
  let dy = y1 - y2;
  return Math.sqrt(dx * dx + dy * dy);
}

export function randomIntFromRange(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

export function randomFloatFromRange(low, high) {
  return Math.random() * (high - low + 1) + low;
}

// 旋转向量
function rotateVector(v, theta) {
  return {
    dx: v.dx * Math.cos(theta) - v.dy * Math.sin(theta),
    dy: v.dy * Math.cos(theta) + v.dx * Math.sin(theta),
  };
}

// 解决碰撞
export function resolveCollision(b1, b2) {
  let v1 = {
    dx: b1.dx,
    dy: b1.dy,
  };

  let v2 = {
    dx: b2.dx,
    dy: b2.dy,
  };

  let theta = -Math.atan2(b1.y - b2.y, b1.x - b2.x);

  let v1Rotated = rotateVector(v1, theta);
  let v2Rotated = rotateVector(v2, theta);

  // 通过完全弹性碰撞公式计算新速度（旋转后坐标）
  let v1RotatedAfterCollision = {
    dx: (v1Rotated.dx * (b1.mass - b2.mass) + 2 * b2.mass * v2Rotated.dx) / (b1.mass + b2.mass),
    dy: v1Rotated.dy,
  };
  let v2RotatedAfterCollision = {
    dx: (v2Rotated.dx * (b2.mass - b1.mass) + 2 * b1.mass * v1Rotated.dx) / (b1.mass + b2.mass),
    dy: v2Rotated.dy,
  };

  // 旋转回原坐标
  let v1AfterCollision = rotateVector(v1RotatedAfterCollision, -theta);
  let v2AfterCollision = rotateVector(v2RotatedAfterCollision, -theta);

  // 更新小球速度
  b1.dx = v1AfterCollision.dx;
  b1.dy = v1AfterCollision.dy;
  b2.dx = v2AfterCollision.dx;
  b2.dy = v2AfterCollision.dy;
}
