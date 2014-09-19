﻿/*
* Box2D.XNA port of Box2D:
* Copyright (c) 2009 Brandon Furtwangler, Nathan Furtwangler
*
* Original source Box2D:
* Copyright (c) 2006-2009 Erin Catto http://www.gphysics.com 
* 
* This software is provided 'as-is', without any express or implied 
* warranty.  In no event will the authors be held liable for any damages 
* arising from the use of this software. 
* Permission is granted to anyone to use this software for any purpose, 
* including commercial applications, and to alter it and redistribute it 
* freely, subject to the following restrictions: 
* 1. The origin of this software must not be misrepresented; you must not 
* claim that you wrote the original software. If you use this software 
* in a product, an acknowledgment in the product documentation would be 
* appreciated but is not required. 
* 2. Altered source versions must be plainly marked as such, and must not be 
* misrepresented as being the original software. 
* 3. This notice may not be removed or altered from any source distribution. 
*/

using System;
using System.Diagnostics;
using Microsoft.Xna.Framework;

namespace Box2D.XNA
{
    /// <summary>
    /// This holds contact filtering data.
    /// </summary>
    public struct Filter
    {
        /// <summary>
        /// The collision category bits. Normally you would just set one bit.
        /// </summary>
        public UInt16 categoryBits;

        /// <summary>
        /// The collision mask bits. This states the categories that this
        /// shape would accept for collision.
        /// </summary>
        public UInt16 maskBits;

        /// <summary>
        /// Collision groups allow a certain group of objects to never collide (negative)
        /// or always collide (positive). Zero means no collision group. Non-zero group
        /// filtering always wins against the mask bits.
        /// </summary>
        public Int16 groupIndex;
    };

    /// <summary>
    /// A fixture definition is used to create a fixture. This class defines an
    /// abstract fixture definition. You can reuse fixture definitions safely.
    /// </summary>
    public class FixtureDef
    {
        /// <summary>
        /// The constructor sets the default fixture definition values.
        /// </summary>
        public FixtureDef()
        {
            shape = null;
            userData = null;
            friction = 0.2f;
            restitution = 0.0f;
            density = 0.0f;
            filter.categoryBits = 0x0001;
            filter.maskBits = 0xFFFF;
            filter.groupIndex = 0;
            isSensor = false;
        }

        /// <summary>
        /// The shape, this must be set. The shape will be cloned, so you
        /// can create the shape on the stack.
        /// </summary>
        public Shape shape;

        /// <summary>
        /// Use this to store application specific fixture data.
        /// </summary>
        public object userData;

        /// <summary>
        /// The friction coefficient, usually in the range [0,1].
        /// </summary>
        public float friction;

        /// <summary>
        /// The restitution (elasticity) usually in the range [0,1].
        /// </summary>
        public float restitution;

        /// <summary>
        /// The density, usually in kg/m^2.
        /// </summary>
        public float density;

        /// <summary>
        /// A sensor shape collects contact information but never generates a collision
        /// response.
        /// </summary>
        public bool isSensor;

        /// <summary>
        /// Contact filtering data.
        /// </summary>
        public Filter filter;
    };

    /// <summary>
    /// A fixture is used to attach a shape to a body for collision detection. A fixture
    /// inherits its transform from its parent. Fixtures hold additional non-geometric data
    /// such as friction, collision filters, etc.
    /// Fixtures are created via Body.CreateFixture.
    /// @warning you cannot reuse fixtures.
    /// </summary>
    public class Fixture
    {
        /// <summary>
        /// Get the type of the child shape. You can use this to down cast to the concrete shape.
        /// @return the shape type.
        /// </summary>
        public ShapeType ShapeType
        {
            get { return _shape.ShapeType; }
        }

        /// <summary>
        /// Get the child shape. You can modify the child shape, however you should not change the
        /// number of vertices because this will crash some collision caching mechanisms.
        /// </summary>
        /// <returns></returns>
        public Shape GetShape()
        {
            return _shape;
        }

        /// <summary>
        /// Is this fixture a sensor (non-solid)?
        /// </summary>
        /// <returns>the true if the shape is a sensor.</returns>
        public bool IsSensor()
        {
            return _isSensor;
        }

        /// <summary>
        /// Set if this fixture is a sensor.
        /// </summary>
        /// <param name="sensor"></param>
        public void SetSensor(bool sensor)
        {
            _isSensor = sensor;
        }

        /// <summary>
        /// Set the contact filtering data. This will not update contacts until the next time
        /// step when either parent body is active and awake.
        /// </summary>
        /// <param name="filter"></param>
        public void SetFilterData(ref Filter filter)
        {
            _filter = filter;

            if (_body == null)
            {
                return;
            }

            // Flag associated contacts for filtering.
            ContactEdge edge = _body.GetContactList();
            while (edge != null)
            {
                Contact contact = edge.Contact;
                Fixture fixtureA = contact.GetFixtureA();
                Fixture fixtureB = contact.GetFixtureB();
                if (fixtureA == this || fixtureB == this)
                {
                    contact.FlagForFiltering();
                }

                edge = edge.Next;
            }
        }

        /// <summary>
        /// Get the contact filtering data.
        /// </summary>
        /// <param name="filter"></param>
        public void GetFilterData(out Filter filter)
        {
            filter = _filter;
        }

        /// <summary>
        /// Get the parent body of this fixture. This is null if the fixture is not attached.
        /// </summary>
        /// <returns>the parent body.</returns>
        public Body GetBody()
        {
            return _body;
        }

        /// <summary>
        /// Get the next fixture in the parent body's fixture list.
        /// </summary>
        /// <returns>the next shape.</returns>
        public Fixture GetNext()
        {
            return _next;
        }

        /// <summary>
        /// Get the user data that was assigned in the fixture definition. Use this to
        /// store your application specific data.
        /// </summary>
        /// <returns></returns>
        public object GetUserData()
        {
            return _userData;
        }

        /// <summary>
        /// Set the user data. Use this to store your application specific data.
        /// </summary>
        /// <param name="data"></param>
        public void SetUserData(object data)
        {
            _userData = data;
        }

        public void SetDensity(float density)
        {
            Debug.Assert(MathUtils.IsValid(density) && density >= 0.0f);
            _density = density;
        }

        public float GetDensity()
        {
            return _density;
        }


        /// <summary>
        /// Test a point for containment in this fixture.
        /// @param xf the shape world transform.
        /// </summary>
        /// <param name="p">a point in world coordinates.</param>
        /// <returns></returns>
        public bool TestPoint(Vector2 p)
        {
            Transform xf;
            _body.GetTransform(out xf);
            return _shape.TestPoint(ref xf, p);
        }

        /// <summary>
        /// Cast a ray against this shape.
        /// </summary>
        /// <param name="output">the ray-cast results.</param>
        /// <param name="input">the ray-cast input parameters.</param>
        /// <returns></returns>
        public bool RayCast(out RayCastOutput output, ref RayCastInput input)
        {
            Transform xf;
            _body.GetTransform(out xf);
            return _shape.RayCast(out output, ref input, ref xf);
        }

        /// <summary>
        /// Get the mass data for this fixture. The mass data is based on the density and
        /// the shape. The rotational inertia is about the shape's origin.
        /// </summary>
        /// <param name="massData"></param>
        public void GetMassData(out MassData massData)
        {
            _shape.ComputeMass(out massData, _density);
        }


        /// <summary>
        /// Get the coefficient of friction.
        /// </summary>
        /// <returns></returns>
        public float GetFriction()
        {
            return _friction;
        }

        /// <summary>
        /// Set the coefficient of friction.
        /// </summary>
        /// <param name="friction"></param>
        public void SetFriction(float friction)
        {
            _friction = friction;
        }

        /// <summary>
        /// Get the coefficient of restitution.
        /// </summary>
        /// <returns></returns>
        public float GetRestitution()
        {
            return _restitution;
        }

        /// <summary>
        /// Set the coefficient of restitution.
        /// </summary>
        /// <param name="restitution"></param>
        public void SetRestitution(float restitution)
        {
            _restitution = restitution;
        }

        /// <summary>
        /// Get the fixture's AABB. This AABB may be enlarge and/or stale.
        /// If you need a more accurate AABB, compute it using the shape and
        /// the body transform.
        /// </summary>
        /// <param name="aabb"></param>
        public void GetAABB(out AABB aabb)
        {
            aabb = _aabb;
        }

        internal Fixture()
        {
            _userData = null;
            _body = null;
            _next = null;
            _proxyId = BroadPhase.NullProxy;
            _shape = null;
        }

        /// <summary>
        /// We need separation create/destroy functions from the constructor/destructor because
        /// the destructor cannot access the allocator or broad-phase (no destructor arguments allowed by C++).
        /// </summary>
        /// <param name="body"></param>
        /// <param name="def"></param>
        internal void Create(Body body, FixtureDef def)
        {
            _userData = def.userData;
            _friction = def.friction;
            _restitution = def.restitution;

            _body = body;
            _next = null;

            _filter = def.filter;

            _isSensor = def.isSensor;

            _shape = def.shape.Clone();

            _density = def.density;
        }

        internal void Destroy()
        {
            // The proxy must be destroyed before calling this.
            Debug.Assert(_proxyId == BroadPhase.NullProxy);

            _shape = null;
        }

        /// <summary>
        /// These support body activation/deactivation.
        /// </summary>
        /// <param name="broadPhase"></param>
        /// <param name="xf"></param>
        internal void CreateProxy(BroadPhase broadPhase, ref Transform xf)
        {
            Debug.Assert(_proxyId == BroadPhase.NullProxy);

            // Create proxy in the broad-phase.
            _shape.ComputeAABB(out _aabb, ref xf);
            _proxyId = broadPhase.CreateProxy(ref _aabb, this);
        }

        internal void DestroyProxy(BroadPhase broadPhase)
        {
            if (_proxyId == BroadPhase.NullProxy)
            {
                return;
            }

            // Destroy proxy in the broad-phase.
            broadPhase.DestroyProxy(_proxyId);
            _proxyId = BroadPhase.NullProxy;
        }


        internal void Synchronize(BroadPhase broadPhase, ref Transform transform1, ref Transform transform2)
        {
            if (_proxyId == BroadPhase.NullProxy)
            {
                return;
            }

            // Compute an AABB that covers the swept shape (may miss some rotation effect).
            AABB aabb1, aabb2;
            _shape.ComputeAABB(out aabb1, ref transform1);
            _shape.ComputeAABB(out aabb2, ref transform2);

            _aabb.Combine(ref aabb1, ref aabb2);

            Vector2 displacement = transform2.Position - transform1.Position;

            broadPhase.MoveProxy(_proxyId, ref _aabb, displacement);

        }

        internal AABB _aabb;

        internal float _density;

        internal Fixture _next;
        internal Body _body;

        internal Shape _shape;

        internal float _friction;
        internal float _restitution;

        internal int _proxyId;
        internal Filter _filter;

        internal bool _isSensor;

        internal object _userData;
    };
}
